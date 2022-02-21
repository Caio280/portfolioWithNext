import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHeros from '../components/HomeHeros';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHeros />
        <Experience />
      </main>
    </HomeContainer>
  );
}
