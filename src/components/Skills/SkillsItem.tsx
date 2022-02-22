import { ReactNode } from 'react'
import { SkillsContainer } from './styles'

interface SkillsProps {
  title: string;
  icons: ReactNode;
}

export default function SkillsItem ({ title, icons }: SkillsProps) {
  return (
    <SkillsContainer>
      <p>{title}</p>
      {icons}
    </SkillsContainer>
  )
}