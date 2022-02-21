import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="02 years" description="of experience."/>
     <section>
     <ExperienceItem 
      year="2020"
      title="Programmer"
      description="I started studying programming in C language by my college"
     />
     <ExperienceItem 
      year="2021"
      title="Dev Front-end"
      description="Discover web and mobile development and i loved it right from the start, so i focused on studying and discovering everything i could."
     />
     <ExperienceItem 
      year="2022"
      title="Studying Back-end"
      description="I decided to take a look at Back-end development and find out how it works, i have been enjoying it a lot too."
     />
     </section>
    </Container>
  );
};

export default Experience;
