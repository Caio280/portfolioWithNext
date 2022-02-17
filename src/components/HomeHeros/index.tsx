/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfoContainer, CodeItem } from './styles';
import picture from '../../../assets/eu_copia.png';

function HomeHeros() {
  return (
    <Container>
      <img src={picture} alt="me" />
      <div>
        <TextContainer>
          <h1>Hello,</h1>
          <h2>my name is Caio Olivieri</h2>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className="comment">//My presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Age: <span className="blue"> 23,</span>
            </div>
            <div>
              Studying:
              <span className="blue"> Control and Automation Engineering.</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Interested_In</span> {'\u007B'}
            <div>
              JobTitle: <span className="blue"> Front-End Developer,</span>
            </div>
            <div>
              Searching:
              <span className="blue">
                {' '}
                An opportunity to improve myself as <br /> a technology
                professional.
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default HomeHeros;
