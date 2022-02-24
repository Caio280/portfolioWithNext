import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHeros from '../components/HomeHeros';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHeros />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </HomeContainer>
  );
}
