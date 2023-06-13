import { Container } from "./styles"
import { useAuth } from '../../hooks/auth'

import heartSvg from '../../assets/heart.svg'
import pencilSvg from '../../assets/pencil.svg'
import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import parmaSvg from '../../assets/parma.svg'

import { Button } from '../Button'

export function MealCard({src, ...rest}){
  const {user} = useAuth()

  return(
    <Container {...rest}>
      {user.is_admin ? <img src={pencilSvg} alt="Botão de favoritar" /> : <img src={heartSvg} alt="Botão de favoritar" />}
      <div className="dish">
        <img src={parmaSvg} alt="Imagem do prato Parma" />
        <p>Parma</p>
        <p className="description">Descrição do prato</p>
        <span>R$ 49,97</span>
        {!user.is_admin &&
        <div className="actions">
          <div className="quantity">
            <img src={minusSvg} alt="Diminuir quantidade" />
            <span>01</span>
            <img src={plusSvg} alt="Aumentar quantidade" />
          </div>
        <Button title='incluir' />
       </div>}
      </div>
    </Container>
  )
}