import { Container } from './styles'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Logo className="logo" />
      <div className='form'>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email" type="email" />
        <Input placeholder="No mínimo 6 caracteres" label="Senha" id="senha" type='password' />
        <Button title="Entrar"/>
        <a href="#">Criar conta</a>
      </div>
    </Container>
  )
}