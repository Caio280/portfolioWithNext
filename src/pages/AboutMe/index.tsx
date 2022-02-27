import Header from "../../components/Header";
import AboutMeItem from '../AboutMe/AboutMeItem';
import { AboutMeContainer } from "../../styles/AboutMeStyles";
import Footer from "../../components/Footer";

export default function AboutMe () {
  return (
    
   
    <AboutMeContainer>
      <Header />
        <section>
          <main className="container">
            <AboutMeItem year="2017" title="Studying Informatics" description="When i was in technical high school, i had my first contact with information technology
              and computers, for personal reasons i had to leave technical high school and complete a normal high school. After graduating from high school, i started to 
              study harder everything focused on technology and development.
            " />
            <br />
            <AboutMeItem year="Today" title="Never Stop Learning" description="Nowadays, i already have the mindset that in the technology area, learning is continuos.

            " />
            <br />
            <AboutMeItem year="" title="3D" description="I have a hobby that involves 3D, i like animations, like those made by Pixar or DreamWorks.
              When i discover that there is the possibility of making animations in my computer at home, i started to explore the internet looking for good study contents to start
              playing with 3D and make my own stories.
            " />
          </main>
        </section>

      <Footer />  
    </AboutMeContainer>
   
    
  )
}