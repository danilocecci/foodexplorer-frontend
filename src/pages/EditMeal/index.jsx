import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { CreateIngredient } from '../../components/CreateIngredient'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import caretLeftSvg from '../../assets/caretLeft.svg'
import uploadSvg from '../../assets/upload.svg'

export function EditMeal() {
  const [newIngredient, setNewIngredient] = useState('')
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  function handleAddIngredient(e){
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

  async function handleRemoveMeal(){
    if (confirm('Você realmente deseja excluir este prato?')){
      await api.delete(`/meals/${params.id}`).then(alert('Prato excluído com sucesso!'))
      navigate(-1)
    }
  }

  function handleImageFile(e) {
    const file = e.target.files[0];
    console.log(e.target.files)

    setImage(file);
  }

  async function handleEditMeal(){
    if(!image || !name || !category || !price || !description || !ingredients){
      return alert('Por favor, preencha todos os campos!')
    }

    if (newIngredient){
      return alert('Você deixou um ingrediente sem adicionar! \nClique em "+" para adicioná-lo!')
    }

    await api.patch(`/meals/${params.id}`, {
      image,
      name,
      category,
      ingredients,
      price,
      description
    }, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(() => {
      alert('Prato editado com sucesso!')
      navigate(-1)
    }).catch((error) => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Erro ao adicionar prato!')
      }
    })
  }

  useEffect(() => {
    async function fetchMealsInfo() {
      const meal = await api.get(`/meals/${params.id}`);
  
      const { category, image, name, price, description, ingredients } = meal.data

      console.log(meal.data)
  
      setCategory(category)
      setImage(image)
      setName(name)
      setPrice(price)
      setDescription(description)
      setIngredients(ingredients.map(ingredient => ingredient.name))
    }
    fetchMealsInfo()
  }, [])

  return (
    <Container>
      <Header admin />
      <div className="pageMealContent">
        <div className="newMealContent">
        <Link to="/"><img src={caretLeftSvg}></img>voltar</Link>
          <h3>Editar prato</h3>
          <div className="col-3">
            <div className="mealImage">
              <p>Imagem do prato</p>
              <label htmlFor='inputMealImg'>
                <img src={uploadSvg} alt="Imagem de uma seta para cima representando o 'upload'" />
                Selecione imagem
              </label>
              <Input placeholder="Selecione Imagem" label="Imagem do prato" id="inputMealImg" type='file' onChange={handleImageFile}/>
            </div>
            <Input placeholder="Ex.: Salada Ceasar" label="Nome" id="inputMealName" defaultValue={name} onChange={e => setName(e.target.value)}/>
            <div className="selectWrapper">
              <label htmlFor="selectInput">Categoria</label>
              <select id="selectInput" value={category.toLowerCase()} onChange={(e) => setCategory(e.target.value)} defaultValue={category}>
                <option value="refeicao">Refeição</option>
                <option value="principal">Prato principal</option>
                <option value="bebidas">Bebida</option>
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
            <Input placeholder="R$ 00,00" label="Preço" id="inputMealPrice" type='number' defaultValue={price} onChange={(e) =>  setPrice(e.target.value)}/>
          </div>
          <div className='textareaWrapper'>
            <label htmlFor="textareaInput">Descrição</label>
            <textarea id='textareaInput' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' defaultValue={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="buttonsWrapper">
            <Button title='Excluir prato' onClick={handleRemoveMeal}/>
            <Button title='Salvar alterações' onClick={handleEditMeal}/>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  )
}