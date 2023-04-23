import { Container } from './styles'
import { Link } from 'react-router-dom'

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
        <Link to='/register'>Criar conta</Link>
      </div>
    </Container>
  )
}