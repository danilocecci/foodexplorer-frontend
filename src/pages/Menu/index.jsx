import { useState } from 'react'

import { Container } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import searchSvg from '../../assets/search.svg'

export function Menu() {
  const { user, signOut } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Container>
      <Header menu searchTerm={searchTerm}/>
      <div className="menuContent">
        <Input icon={searchSvg} placeholder='Busque por pratos ou ingredientes' onChange={e => setSearchTerm(e.target.value)}/>
        {user.is_admin && <Link to='/new'>Novo Prato</Link>}
        <Link to={`/`} onClick={signOut}>Sair</Link>
      </div>
      <Footer />
    </Container>
  )
}