import { Container } from "./styles"

import menuImg from '../../assets/menu.svg'
import { Logo } from '../Logo'
import receiptImg from '../../assets/receipt.svg'

export function Header(){
  return(
    <Container>
      <img src={menuImg} alt="Botão de menu" />
      <Logo />
      <img src={receiptImg} alt="Botão de pedidos" />
    </Container>
  )
}