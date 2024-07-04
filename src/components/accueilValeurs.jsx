import styled from 'styled-components';
import ParaphValeur from './ParagraphValeur';

const ComponentContainer = styled.div`
    width: 67%;
    margin: auto;
     @media (max-width: 912px) {
        width: 100%;
    }
`;
const TitleValeurs = styled.div`
    font-size: 28px;
    color: var(--prodsTitle);
`;
const ContentValeurs = styled.div`
    width: 100%;
    text-align: justify;
    color: var(--valeursTxt);
    font-size: 18px;
    line-height: 1.6;
`;
const ParagraphTitleValeur = styled.p`
    width: 100%;
    text-align: justify;
    color: var(--valeursTxt);
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 50px;
`;

const AccueilValeurs = () => {
  const isNetlify   = window.location.hostname.includes('netlify.app');
  const imgBasePath = isNetlify ? "../../images/valeurs/" : "../../public/images/valeurs/";

  return (
    <ComponentContainer>
      <TitleValeurs>Nos valeurs</TitleValeurs>
      <ParagraphTitleValeur>Chez WorldCommerce, notre engagement est profond et nous travaillons dur pour avoir un impact positif sur le bien-être humain et planétaire,
            le bien-être des agriculteurs et des travailleurs, ainsi que sur les générations futures.
            Notre histoire de succès a commencé avec la fondatrice Marcia Zaria, qui a ouvert la voie dans l'industrie textile durable depuis plus de 30 ans.
            Grâce à l'expertise étendue de Marci, notre serre a été cultivée avec des racines profondes dans la régénération et la résilience. Nous sommes passionnés par
            la création de vêtements et de modes pour la maison intemporels et durables, fabriqués de manière responsable à partir des meilleurs matériaux et pratiques
            de fabrication possibles, de la semence à soi-même.
            Être des leaders dans la production durable est une source de fierté pour nous. Nous croyons que la mode devrait être plus que juste belle — elle devrait
            être une force de bien dans le monde, tout en donnant du pouvoir aux consommateurs et aux détaillants. Et c'est vers cela que nous travaillons chaque jour.
            En tant que pionniers et autorités de l'éco-mode, nous sommes excités de conduire le changement que nous souhaitons tous voir dans le monde.
      </ParagraphTitleValeur>
      <ContentValeurs>
        <ParaphValeur logo={`${imgBasePath}serviceClient.png`} title="Service client exceptionnel" text="Nous nous engageons à offrir un service client de qualité, prêt à répondre à toutes vos questions et à résoudre vos problèmes rapidement et efficacement."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}qualiteProduit.png`} title="Qualité des produits" text="Nous sélectionnons soigneusement nos produits pour garantir qu'ils répondent aux normes les plus élevées de qualité et de durabilité."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}innovation.png`} title="Innovation" text="Nous utilisons les technologies les plus avancées pour améliorer votre expérience de shopping et introduire de nouvelles fonctionnalités innovantes."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}securiteTransaction.png`} title="Sécurité des transactions" text="Nous prenons la sécurité de vos informations personnelles très au sérieux et utilisons des mesures de sécurité de pointe pour protéger vos données."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}diversiteInclusion.png`} title="Diversité et inclusion" text="Nous valorisons la diversité et nous nous efforçons de créer un environnement inclusif où tout le monde se sent bienvenu."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}developpementDurable.png`} title="Développement durable" text="Nous nous engageons à adopter des pratiques respectueuses de l'environnement pour contribuer à un avenir durable."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}transparence.png`} title="Transparence" text="Nous croyons en une communication honnête et ouverte avec nos clients. Vous pouvez toujours compter sur nous pour être clairs et transparents sur nos politiques et nos prix."></ParaphValeur>
        <ParaphValeur logo={`${imgBasePath}engagementCommunotaire.png`} title="Engagement communautaire" text="Nous soutenons activement les communautés locales et nous investissons dans des initiatives qui ont un impact positif sur la société."></ParaphValeur>
      </ContentValeurs>
    </ComponentContainer>
  );
};

export default AccueilValeurs;