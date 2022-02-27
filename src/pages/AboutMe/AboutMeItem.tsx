import { ItemContainer } from '../../styles/AboutMeStyles'

interface AboutMeProps {
  year?: string;
  title?: string;
  description?: string;
}

export default function AboutMeItem ({ year, title, description }: AboutMeProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  )
}