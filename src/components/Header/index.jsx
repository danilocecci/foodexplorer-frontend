import { Container } from "./styles"

import menuSvg from '../../assets/menu.svg'
import receiptSvg from '../../assets/receipt.svg'
import closeSvg from '../../assets/close.svg'
import { Logo } from '../Logo'

export function Header({menu, admin}){
  return(
    <Container>
      {!admin ? 
      menu ? <div className='menu'><img src={closeSvg} alt="Botão de menu"  />Menu</div>
      : <>
        <img src={menuSvg} alt="Botão de menu" />
        <Logo />
        <span>admin</span>
      </> :
      menu ? <div className='menu'><img src={closeSvg} alt="Botão de menu"  />Menu</div>
      : <>
        <img src={menuSvg} alt="Botão de menu" />
        <Logo />
        <img src={receiptSvg} alt="Botão de pedidos" />
      </>
      }
    </Container>
  )
}