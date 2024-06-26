import styled from 'styled-components';

const TitlePage = styled.div`
  font-size: 28px;
  color: var(--categorieTitle);
  margin: 25px 0 25px 0;
  @media (max-width: 900px) {
    margin: -25px 0 25px 0; 
  }
  ${props => props.additionalstyles}  // Appliquer des styles additionnels
`;

const TitlePageComp = (props) => {
  return (
    <TitlePage additionalstyles={props.additionalstyles}>{props.title}</TitlePage>
  );
}

export default TitlePageComp;
