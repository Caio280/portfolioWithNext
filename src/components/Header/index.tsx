import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="About me" path="/AboutMe" />
      </ul>
    </Container>
  );
}

export default Header;
