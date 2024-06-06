import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ComponentContainer = styled.div`
    display: block;
    margin-top: 50px;
`;
const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-around;
    @media (max-width: 1350px) {
        grid-template-columns: repeat(3, 1fr); 
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`;
const ImageProduitContainer = styled.div`
    display: block;
`;
const ImageProduit = styled.img`
    width: 200px;
    height: 250px;
    border: 1px #ccc solid;
    border-radius: 35px;
    background: linear-gradient(42deg, rgb(2, 0, 36) 0%, rgb(59, 102, 104) 55%, rgb(73, 187, 160) 100%);
`;
const TitleProduits = styled.div`
    font-size: 28px;
    color: var(--prodsTitle);
    margin-bottom: 25px;
`;
const TitleProduit = styled.div`
    font-size: 18px;
    color: var(--prodText);
    margin-bottom: 25px;
`;
const PriceProduit = styled.div`
    font-size: 18px;
    color: var(--prodText);
    margin-bottom: 25px;
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

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}


const LastProdsPresentation = () => {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

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
      <ImagesContainer>
        {data.map(item => (
          <ImageProduitContainer>
            <TitleProduit>{truncateString(item.title, 25)}</TitleProduit>
            <ImageProduit src={item.images[0]} alt={item.title} />
            <PriceProduit>{item.price + ' €'}</PriceProduit>
          </ImageProduitContainer>
        ))}
      </ImagesContainer>
    </ComponentContainer>
  );
};

export default LastProdsPresentation;
