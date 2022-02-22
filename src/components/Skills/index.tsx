import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import SkillsItem from './SkillsItem';
import { Container } from './styles';

function Skills() {
  return (
    <Container>
      <SectionTitle title="Skills"/>
      <section>
        <SkillsItem title="HTML" icons={<AiFillHtml5 />} />
        <SkillsItem title="CSS" icons={<FaCss3Alt />} />
        <SkillsItem title="JavaScript" icons={<IoLogoJavascript />} />
        <SkillsItem title="React" icons={<FaReact />} />
        <SkillsItem title="Node.JS" icons={<FaNode />} />
      </section>
    </Container>
  );
};

export default Skills;
