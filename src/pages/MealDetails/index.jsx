import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import { Container } from "./styles"
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import caretLeftSvg from '../../assets/caretLeft.svg'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import receiptSvg from  '../../assets/receipt.svg'

import { api } from '../../services/api'

export function MealDetails(){
  const { user } = useAuth()
  
  const params = useParams()

  const [quantity, setQuantity] = useState(1)
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])

  function handleAdd(){
    setQuantity(quantity + 1)
  }

  function handleSub(){
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  useEffect(() => {
    async function fetchMealData() {
      const meal = await api.get(`/meals/${params.id}`);
      const imageUrl = meal && `${api.defaults.baseURL}/files/${meal.data.image}`;
      const { name, price, description, ingredients } = meal.data

      setImage(imageUrl)
      setName(name)
      setPrice(price)
      setDescription(description)
      setIngredients(ingredients.map(ingredient => ingredient.name))
    }
    fetchMealData()
  }, [])

  return(
    <Container>
      <Header admin={user.is_admin}/>
      <div className="page">
        <div className="content">
        <Link to='/'><img src={caretLeftSvg}></img>voltar</Link>
        <div className="mealDetailsContent">
          <img src={image} alt={`Imagem de ${name}`} />          <div className="mealsInfo">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="tagsWrapper">
              {ingredients.map((ingredient, index) => {
                 return (
                 <Tag title={ingredient} key={index}/>
                 )
                 })}
            </div>
            <div className="mealDetailsButtons">
            {user.is_admin ? <Button title="Editar prato" /> :
              <> 
                <img src={minusSvg} alt="Diminuir quantidade" onClick={handleSub} />
                <span className="quantity">{String(quantity).padStart(2,'0')}</span>
                <img src={plusSvg} alt="Diminuir quantidade" onClick={handleAdd} />
                <Button title={`incluir • R$ ${Intl.NumberFormat('pt-BR').format(price)}`} icon={receiptSvg}/>
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