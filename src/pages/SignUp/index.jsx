import { Container } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { api } from '../../services/api'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if (!name || !email || !password){
      alert("Por favor, preencha todos os campos")
    }

    api.post("/users", { name, email, password })
    .then(() => { 
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar!")
        console.log(error)
      }
  })
    
  }

  return (
    <Container>
      <Logo className="logo" />
      <form autoComplete="on">
        <Input placeholder="Exemplo: Maria da Silva" label="Seu nome" id="name" onChange={ e => setName(e.target.value)} />

        <Input placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" id="email" type="email" autoComplete='username' onChange={ e => setEmail(e.target.value)} />

        <Input placeholder="No mínimo 6 caracteres" label="Senha" id="senha" type='password' autoComplete='current-password' onChange={ e => setPassword(e.target.value)}/>

        <Button title="Criar conta" onClick={handleSignUp}/>
        <Link to='/'>Já tenho uma conta</Link>
      </form>
    </Container>
  )
}