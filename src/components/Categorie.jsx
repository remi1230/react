import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ImageCategorieContainer = styled.div`
    display: block;
`;
const TitleCategorie = styled.div`
    font-size: 18px;
    color: var(--categorieTitle);
    margin: 12px 0 12px;
`;
const CardCategorie = styled(Card)`
    height: fit-content;
    background-color: var(--categorieBg);
`;
const CardContentStyled = styled(CardContent)`
    background: var(--categorieBg);
`;
const CardMediaStyled = styled(CardMedia)`
    height: 100%;
`;

const Categorie = (props) => {
  const navigate = useNavigate();

  const handleImageClick = (title) => {
      navigate(`/categorie/${title}`);
    };

  return (
    <CardCategorie sx={{ width: 275 }}  onClick={() => handleImageClick(props.title)} style={{ cursor: 'pointer' }}>
        <CardContentStyled>
        <ImageCategorieContainer>
            <TitleCategorie>{props.title}</TitleCategorie>
            <CardMediaStyled height="275" component="img" image={props.image} alt={props.title} />
        </ImageCategorieContainer>
        </CardContentStyled>
    </CardCategorie>
  );
};

export default Categorie;

