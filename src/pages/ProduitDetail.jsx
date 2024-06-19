import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProdDetailPresentation from '../components/ProdDetailPresentation';
import TitlePage from '../components/TitlePage';

const DivContainer = styled.div`
    margin-top: 75px;
    font-size: 28px;
`;
const DivProduitDetailTitle = styled.div`
    font-size: 28px;
    color: var(--prodsTitle);
    margin: 80px 0 15px;
`;

function ProduitDetail() {
  const { id } = useParams();

  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setData(response.data);
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

  return(
    <DivContainer>
      {/* <DivProduitDetailTitle>Mon panier</DivProduitDetailTitle> */}
      <TitlePage title={"Achetez " + data.title} />
      <ProdDetailPresentation data={data} />
    </DivContainer>
);
}

export default ProduitDetail;