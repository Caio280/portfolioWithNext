import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="About me" path="/AboutMe" />
        <NavLink title="Projects" path="/Projetos" />
      </ul>
    </Container>
  );
}

export default Header;
