import { Container } from "./styles"
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import menuSvg from '../../assets/menu.svg'
import receiptSvg from '../../assets/receipt.svg'
import closeSvg from '../../assets/close.svg'
import searchSvg from '../../assets/search.svg'
import signOutSvg from '../../assets/signOut.svg'
import forkKnifeSvg from '../../assets/forkKnife.svg'

import { Logo } from '../Logo'
import { Input } from '../Input'

export function Header({menu, admin, searchTerm}){
  const { signOut } = useAuth()

  return(
    <Container>
      {admin ? 
      menu ? <div className='menu'><Link to='/menu'><img src={closeSvg} alt="Botão de menu" /></Link>Menu</div>: 
      <>
          <Link to='/menu'><img src={menuSvg} alt="Botão de menu" /></Link>
          <div className="headerAdmin">
            <Logo />
            <span>admin</span>
          </div>
          <Input className='searchInput' icon={searchSvg} placeholder='Busque por pratos ou ingredientes' onChange={e => searchTerm(e.target.value)} />
          <Link to={admin ? '/new' : '#'}>
            <div className="orderedMeals">
              {!admin ? <img src={receiptSvg} alt="Botão de pedidos" /> : <img className="imgAdmin" src={forkKnifeSvg} alt="Botaõ de novo prato" title="Novo prato"/>}
              <p className="orderedMealsTitle">{admin ? 'Novo prato' : 'Pedidos (0)'}</p>
            </div>
          </Link>

          <div className="signOut" onClick={signOut}><img src={signOutSvg} alt="Botão de sair" /></div>
        </>
       :
      menu ? <div className='menu'><Link to='/'><img src={closeSvg} alt="Botão de menu"  /></Link>Menu</div>
      : 
      <>
        <Link to='/menu'><img src={menuSvg} alt="Botão de menu" /></Link>
        <Logo />
        <Input className='searchInput' icon={searchSvg} placeholder='Busque por pratos ou ingredientes' />
        <div className="orderedMeals">
          <img src={receiptSvg} alt="Botão de pedidos" />
          <p className="orderedMealsTitle">{admin ? 'Novo prato' : 'Pedidos (0)'}</p>
        </div>
        <div className="signOut" onClick={signOut}><img src={signOutSvg} alt="Botão de sair" /></div>
      </>
      }
    </Container>
  )
}