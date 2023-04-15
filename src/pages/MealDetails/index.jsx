import { Container } from "./styles"

import parmaSvg from '../../assets/parma.svg'
import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import caretLeftSvg from '../../assets/caretLeft.svg'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function MealDetails(){
  return(
    <Container>
      <Header />
      <div className="content">
        <a href="#"><img src={caretLeftSvg}></img>voltar</a>
        <div className="mealDetailsContent">
          <img src={parmaSvg} alt="Imagem do prato Parma" />
          <h2>Parma</h2>
          <p>Descrição do prato</p>
          <div className="tagsWrapper">
            <Tag title="alface"/>
            <Tag title="cebola"/>
            <Tag title="rabanete"/>
            <Tag title="tomate"/>
          </div>
          <div className="mealDetailsButtons">
            <img src={minusSvg} alt="Diminuir quantidade" />
            <span className="quantity">01</span>
            <img src={plusSvg} alt="Diminuir quantidade" />
            <Button title="pedir - R$25,00" />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}