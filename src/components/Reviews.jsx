import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stars from './Stars';
import ReviewMeta from './ReviewMeta';

const mediaQueries = {
    1545: '60%',
    1215: '70%',
    915: '80%',
    615: '90%',
    315: '100%',
};

const generateMediaQueries = (queries) => {
    return Object.keys(queries).sort((a, b) => b - a).map(size => `
      @media (max-width: ${size}px) {
        width: ${queries[size]};
      }
    `).join('');
};

const CardReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    ${generateMediaQueries(mediaQueries)}
`;
const CardReview = styled(Card)`
    margin: auto;
    padding: 15px;
    width: 50%;
`;
const CardContentStyled = styled(CardContent)`
    margin-bottom: 20px;
`;
const CardReviewDescription = styled(Card)`
    background-color: var(--cardProdBg);
    padding: 15px 15px 0 15px;
`;
const ReviewDescription = styled(CardContent)`
    color: var(--reviewOpinion);
    font-size: 18px;
`;
const ReviewsTitle = styled.div`
    color: var(--reviewsTitle);
    font-size: 24px;
    margin-bottom: 15px;
`;


const Review = (props) => {
  const data = props.data;
  return (
    <CardReviewsContainer>
        <CardReview sx={{ width: '100%', backgroundColor: '#77aea1' }}>
            <ReviewsTitle>Vos avis</ReviewsTitle>
            {data.map((item, index) => (
                <CardContentStyled>
                    <CardReviewDescription>
                        <ReviewMeta reviewerName={item.reviewerName} date={item.date} key={index} />
                        <Stars number={item.rating} key={index} />
                        <ReviewDescription key={index}>{item.comment}</ReviewDescription>
                    </CardReviewDescription>
                </CardContentStyled>
            ))}
        </CardReview>
    </CardReviewsContainer>
  );
};

export default Review;
