import { Container } from "./styles"
import biscuitImg from '../../assets/biscuit.svg'

export function Banner(){
  return(
    <Container>
      <img src={biscuitImg} alt="Imagem de comidas flutuando" />
      <div className="merchantText">
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}