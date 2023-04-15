import { Container } from './styles'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'

export function Menu() {
  return (
    <Container>
      <Header />
      <Input />
      <a>Sair</a>
      <Footer />
    </Container>
  )
}