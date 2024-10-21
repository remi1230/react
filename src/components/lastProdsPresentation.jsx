import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProdPresentation from './prodPresentation';

const ComponentContainer = styled.div`
    display: block;
    margin: 50px 0 50px 0;
`;
const ImagesSuperContainer = styled.div`
    display: flex;
`;
const ImagesContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-around;
    justify-items: center;
    gap: 25px;
    @media (max-width: 1777px) {
        grid-template-columns: repeat(5, 1fr); 
    }
    @media (max-width: 1550px) {
        grid-template-columns: repeat(4, 1fr); 
    }
    @media (max-width: 1350px) {
        grid-template-columns: repeat(3, 1fr); 
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`;
const ProdPresentationItem = styled(ProdPresentation)`
    width: unset;
    height: 387px;
`;
const TitleProduits = styled.div`
    font-size: 28px;
    color: var(--prodsTitle);
    margin: 25px 0 25px 0;
`;

class RandomNumberGenerator {
    constructor() {
      this.reset();
    }
  
    reset() {
      this.numbers = Array.from({ length: 30 }, (_, i) => i);
      this.shuffle(this.numbers);
    }
  
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    getNextNumber() {
      if (this.numbers.length === 0) {
        this.reset();
      }
      return this.numbers.pop();
    }
}
  
const rng = new RandomNumberGenerator();

const LastProdsPresentation = () => {
  let [data, setData]         = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  data = data.map(item => ({
    ...item,
    uniqueId: uuidv4(),
  }));

  useEffect(() => {
    // Fonction pour récupérer les données
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        if (Array.isArray(response.data.products)) {
            let dataProds = [];
            for(let i = 1; i <= 6; i++){
                dataProds.push(response.data.products[rng.getNextNumber()]);
            }
            setData(dataProds);
          }
        else {
            setData([]); // Mettez à jour avec un tableau vide si ce n'est pas un tableau
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Appel de la fonction fetchData
    fetchData();
  }, []); // Le tableau vide [] signifie que cet effet ne se produira qu'une seule fois après le montage du composant

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ComponentContainer>
      <TitleProduits>Nos derniers produits</TitleProduits>
      <ImagesSuperContainer>
        <ImagesContainer>
          {data.map(item => (
            <ProdPresentationItem key={item.uniqueId} id={item.id} image={item.images[0]} title={item.title} price={item.price} description={item.description}/>
          ))}
        </ImagesContainer>
      </ImagesSuperContainer>
    </ComponentContainer>
  );
};

export default LastProdsPresentation;
