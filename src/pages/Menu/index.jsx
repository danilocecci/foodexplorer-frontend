import { Container } from './styles'

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
        {admin && <a>Novo Prato</a>}
        <a>Sair</a>
      </div>
      <Footer />
    </Container>
  )
}