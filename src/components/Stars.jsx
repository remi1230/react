import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

const DivContainer = styled.div`
    display: block;
    border: none;
`;
const StarsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;
const Star = styled(StarIcon)`
    color: var(--starIcon);
`;


const Stars = (props) => {
  const numberStars = props.number;
  const starsArray  = Array.from({ length: numberStars });

  return (
    <DivContainer>
        <StarsContainer>
        {starsArray.map((_, index) => (
            <Star key={index + parseInt(Math.random() * 30000)} />
        ))}
        </StarsContainer>
    </DivContainer>
  );
};

export default Stars;