import { Container } from "./styles"
import logo from '../../assets/explorer.svg'

export function Logo({src, ...rest}){
  return(
      <Container {...rest}>
        <img src={src ? src : logo} alt="Logo food explorer" />
        food explorer
      </Container>
  )
}