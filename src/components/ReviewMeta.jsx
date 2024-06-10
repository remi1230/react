import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`;
const DivInfos = styled.div`
    margin: auto;
    font-size: 18px;
    color: var(--reviewInfos);
`;

function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


const ReviewMeta = (props) => {
  const reviewerName = props.reviewerName;
  const reviewerDate = formatDate(props.date);

  return (
    <DivContainer>
        <DivInfos>{reviewerName}, le {reviewerDate}</DivInfos>
    </DivContainer>
  );
};

export default ReviewMeta;