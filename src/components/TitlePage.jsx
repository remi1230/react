import styled from 'styled-components';

const TitlePage = styled.div`
    font-size: 28px;
    color: var(--categorieTitle);
    margin: 25px 0 25px 0;
    @media (max-width: 900px) {
        margin: -25px 0 25px 0; 
    }
`;
const TitlePageComp = (props) => {
    return (
        <TitlePage>{props.title}</TitlePage>
    );
}

export default TitlePageComp;