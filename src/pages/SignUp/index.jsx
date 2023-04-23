import { Container } from './styles'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Logo className="logo" />
      <Input placeholder="Exemplo: Maria da Silva" label="Seu nome" id="name" />
      <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email" type="email" />
      <Input placeholder="No mínimo 6 caracteres" label="Senha" id="senha" type='password' />
      <Button title="Criar conta"/>
      <Link to='/'>Já tenho uma conta</Link>
    </Container>
  )
}