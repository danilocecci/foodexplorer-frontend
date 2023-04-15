import { Container } from "./styles"

import { Logo } from '../Logo'
import explorerGrey from '../../assets/explorerGrey.svg'

export function Footer(){
  return(
    <Container>
      <Logo className='logoFooter' src={explorerGrey}/>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}