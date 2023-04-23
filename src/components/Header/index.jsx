import { Container } from "./styles"
import { Link } from 'react-router-dom'

import menuSvg from '../../assets/menu.svg'
import receiptSvg from '../../assets/receipt.svg'
import closeSvg from '../../assets/close.svg'
import { Logo } from '../Logo'

export function Header({menu, admin}){
  return(
    <Container>
      {admin ? 
      menu ? <div className='menu'><Link to='/menu'><img src={closeSvg} alt="Botão de menu" /></Link>Menu</div>
      : <div className="headerAdmin">
          <Link to='/menu'><img src={menuSvg} alt="Botão de menu" /></Link>
          <Logo />
          <span>admin</span>
      </div> :
      menu ? <div className='menu'><Link to='/'><img src={closeSvg} alt="Botão de menu"  /></Link>Menu</div>
      : <>
        <Link to='/menu'><img src={menuSvg} alt="Botão de menu" /></Link>
        <Logo />
        <img src={receiptSvg} alt="Botão de pedidos" />
      </>
      }
    </Container>
  )
}