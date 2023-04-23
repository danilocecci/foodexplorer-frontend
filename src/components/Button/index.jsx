import { Container } from "./styles"

export function Button({title, icon}){
  return(
    <Container type="button">
      {icon && <img src={icon} />}
      {title}
    </Container>
  )
}