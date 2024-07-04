import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitlePage from './TitlePage';
import Categorie from './Categorie';

const ComponentContainer = styled.div`
    display: block;
    margin-bottom: 50px;
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

  function makeImgCatURL(imgTitle){
    const isNetlify   = window.location.hostname.includes('netlify.app');
    const imgBasePath = isNetlify ? "../../images/categories/" : "../../public/images/categories/";

    return `${imgBasePath}${imgTitle}.png`;
  }

  function Capitilize(str){
    return str.replace(str.slice(0,1), str.slice(0,1).toUpperCase());
  }


  const Categories = (props) => {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/category-list');
        if (Array.isArray(response.data)) {
            const datas = response.data.map(data => { return {title: Capitilize(data), url: makeImgCatURL(data)} });

            setData(datas);
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
      <TitlePage title={props.title} />
      <ImagesSuperContainer>
        <ImagesContainer>
          {data.map((item, index) => (
            <Categorie key={index} image={item.url} title={item.title} />
          ))}
        </ImagesContainer>
      </ImagesSuperContainer>
    </ComponentContainer>
  );
};

export default Categories;
