import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;
const ParagraphValeur = styled.p`
    text-align: center;
    margin-top: 0;
`;
const TitleValeur = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 500;
`;
const LogoValeur = styled.img`
    width: 100px;
`;

const ParagraphValeurs = (props) => {
  const title = props.title;
  const text  = props.text;
  const logo  = props.logo;

  return (
    <DivContainer>
        <LogoValeur src={logo} alt="Une image"/>
        <TitleValeur>{title}</TitleValeur>
        <ParagraphValeur>{text}</ParagraphValeur>
    </DivContainer>
  );
};

export default ParagraphValeurs;