import { Container } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import searchSvg from '../../assets/search.svg'

export function Menu() {
  let admin = true

  return (
    <Container>
      <Header menu/>
      <div className="menuContent">
        <Input icon={searchSvg} placeholder='Busque por pratos ou ingredientes' />
        {admin && <Link to='/new'>Novo Prato</Link>}
        <Link to='/'>Sair</Link>
      </div>
      <Footer />
    </Container>
  )
}