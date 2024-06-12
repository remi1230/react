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
const TitleProduits = styled.div`
    font-size: 28px;
    color: var(--prodsTitle);
    margin: 25px 0 25px 0;
`;

const ProdsPresentation = (props) => {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${props.categorie}`);
        if (Array.isArray(response.data.products)) {
            setData(response.data.products);
          }
        else {
            setData([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ComponentContainer>
      <TitleProduits>{props.title}</TitleProduits>
      <ImagesSuperContainer>
        <ImagesContainer>
          {data.map(item => (
            <ProdPresentation id={item.id} image={item.thumbnail} title={item.title} price={item.price} />
          ))}
        </ImagesContainer>
      </ImagesSuperContainer>
    </ComponentContainer>
  );
};

export default ProdsPresentation;
