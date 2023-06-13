import { Container } from "./styles"
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import parmaSvg from '../../assets/parma.svg'
import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import caretLeftSvg from '../../assets/caretLeft.svg'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import receiptSvg from  '../../assets/receipt.svg'

export function MealDetails(){
  const { user } = useAuth()

  return(
    <Container>
      <Header admin={user.is_admin}/>
      <div className="page">
        <div className="content">
        <Link to='/'><img src={caretLeftSvg}></img>voltar</Link>
        <div className="mealDetailsContent">
          <img src={parmaSvg} alt="Imagem do prato Parma" />
          <div className="mealsInfo">
            <h2>Parma</h2>
            <p>Descrição do prato</p>
            <div className="tagsWrapper">
              <Tag title="alface"/>
              <Tag title="cebola"/>
              <Tag title="rabanete"/>
              <Tag title="tomate"/>
            </div>
            <div className="mealDetailsButtons">
            {user.is_admin ? <Button title="Editar prato" /> :
              <> 
                <img src={minusSvg} alt="Diminuir quantidade" />
                <span className="quantity">01</span>
                <img src={plusSvg} alt="Diminuir quantidade" />
                <Button title="pedir - R$25,00" icon={receiptSvg}/>
              </>
            }
            </div>
          </div>
        </div>
        </div>
      <Footer />
      </div>
    </Container>
  )
}