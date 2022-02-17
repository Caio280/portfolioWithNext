import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHeros from '../components/HomeHeros';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHeros />
      </main>
    </HomeContainer>
  );
}
