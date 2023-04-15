import { Container } from "./styles"

import heartSvg from '../../assets/heart.svg'
import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import parmaSvg from '../../assets/parma.svg'

import { Button } from '../Button'

export function MealCard({...rest}){
  return(
    <Container {...rest}>
      <img src={heartSvg} alt="Botão de favoritar" />
      <div className="dish">
        <img src={parmaSvg} alt="Imagem do prato Parma" />
        <p>Parma</p>
        <span>R$ 49,97</span>
        <div className="quantity">
          <img src={minusSvg} alt="Diminuir quantidade" />
          <span>01</span>
          <img src={plusSvg} alt="Aumentar quantidade" />
        </div>
      <Button title='incluir' />
      </div>
    </Container>
  )
}