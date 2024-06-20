import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProdPresentation from './prodPresentation';
import { Pagination } from '@mui/material';
import TitlePage from './TitlePage';

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

const ProdsPresentation = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const itemsPerPage = 24;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=0');
                if (Array.isArray(response.data.products)) {
                    setData(response.data.products);
                } else {
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

    const handleChange = (event, value) => {
        setPage(value);
    };

    const paginatedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ComponentContainer>
            <TitlePage title={props.title} />
            <ImagesSuperContainer>
                <ImagesContainer>
                    {paginatedData.map((item) => (
                        <ProdPresentation
                            key={item.id}
                            id={item.id}
                            image={item.thumbnail}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </ImagesContainer>
            </ImagesSuperContainer>
            <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
                sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </ComponentContainer>
    );
};

export default ProdsPresentation;
