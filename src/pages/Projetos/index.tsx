import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos () {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem 
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="https://media.istockphoto.com/photos/digital-cyberspace-with-particles-and-digital-data-network-high-picture-id1302189748?b=1&k=20&m=1302189748&s=170667a&w=0&h=s0o2dhTh40lrWLPt6rg54S0jCUywkr6h04rDdfStMq8="
        />
        <ProjetoItem 
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="https://media.istockphoto.com/photos/digital-cyberspace-with-particles-and-digital-data-network-high-picture-id1302189748?b=1&k=20&m=1302189748&s=170667a&w=0&h=s0o2dhTh40lrWLPt6rg54S0jCUywkr6h04rDdfStMq8="
        />
        <ProjetoItem 
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="https://media.istockphoto.com/photos/digital-cyberspace-with-particles-and-digital-data-network-high-picture-id1302189748?b=1&k=20&m=1302189748&s=170667a&w=0&h=s0o2dhTh40lrWLPt6rg54S0jCUywkr6h04rDdfStMq8="
        />
        <ProjetoItem 
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="https://media.istockphoto.com/photos/digital-cyberspace-with-particles-and-digital-data-network-high-picture-id1302189748?b=1&k=20&m=1302189748&s=170667a&w=0&h=s0o2dhTh40lrWLPt6rg54S0jCUywkr6h04rDdfStMq8="
        />
      </main>
    </ProjetosContainer>
  )
}