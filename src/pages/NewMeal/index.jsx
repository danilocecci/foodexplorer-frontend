import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { CreateIngredient } from '../../components/CreateIngredient'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import caretLeftSvg from '../../assets/caretLeft.svg'
import uploadSvg from '../../assets/upload.svg'

export function NewMeal() {
  const [newIngredient, setNewIngredient] = useState('')
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const { user } = useAuth()

  function handleAddIngredient(e){
    if(newIngredient.length < 3 ){
      return alert('Ingrediente não aceito!')
    }
    
    const ingredientInputElement = e.target.parentNode.childNodes[0]
    const ingredientIsValid = newIngredient.trim().length <= 0 ? false : true
    ingredientIsValid && setIngredients(prevState => [...prevState, newIngredient.trim()])
    setNewIngredient('')
    ingredientInputElement.size = 6
    ingredientInputElement.focus()
  }

  function handleRemoveIngredient(ingredientToRemove){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientToRemove))
  }

  return (
    <Container>
      <Header admin={user.is_admin}/>
      <div className="pageMealContent">
        <div className="newMealContent">
          <Link to="/"><img src={caretLeftSvg}></img>voltar</Link>
          <h3>Adicionar prato</h3>
          <div className="col-3">
            <div className="mealImage">
              <p>Imagem do prato</p>
              <label htmlFor='inputMealImg'>
                <img src={uploadSvg} alt="Imagem de uma seta para cima representando o 'upload'" />
                Selecione imagem
              </label>
              <Input placeholder="Selecione Imagem" label="Imagem do prato" id="inputMealImg" type='file' />
            </div>
            <Input placeholder="Ex.: Salada Ceasar" label="Nome" id="inputMealName" />
            <div className="selectWrapper">
              <label htmlFor="selectInput">Categoria</label>
              <select id="selectInput">
                <option value="refeicao">Refeição</option>
                <option value="principal">Prato principal</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <div className="ingredientsInput">
              <p className='ingredientsLabel'>Ingredientes</p>
              <div className='tagWrapper'>
                {ingredients.map((ingredient, index) => { return(
                  <CreateIngredient key={index} placeholder={'Adicionar'}
                  value={ingredient} 
                  onClick={() => handleRemoveIngredient(ingredient)} />)
                })}
                <CreateIngredient  placeholder={'Adicionar'}
                    isNew
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient} />
              </div>
            </div>
            <Input placeholder="R$ 00,00" label="Preço" id="inputMealPrice" />
          </div>
          <div className='textareaWrapper'>
            <label htmlFor="textareaInput">Descrição</label>
            <textarea id='textareaInput' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'></textarea>
          </div>
          <Button title='Salvar alterações' />
        </div>
        <Footer />
      </div>
    </Container>
  )
}