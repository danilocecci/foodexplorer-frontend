import { useState } from 'react'

import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Logo className="logo" />
      <form autoComplete="on">
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email" type="email" autoComplete='username' onChange={e => setEmail(e.target.value)}/>

        <Input placeholder="No mínimo 6 caracteres" label="Senha" id="senha" type='password' autoComplete='current-password' onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to='/register'>Criar conta</Link>
      </form>
    </Container>
  )
}