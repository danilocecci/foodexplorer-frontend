import { useState } from 'react'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { CreateTag } from '../../components/CreateTag'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import caretLeftSvg from '../../assets/caretLeft.svg'
import uploadSvg from '../../assets/upload.svg'

export function NewMeal() {
  const [newTag, setNewTag] = useState('')

  function handleAddTag(e){
    const tagInputElement = e.target.parentNode.parentNode.childNodes[0]
    const tagIsValid = newTag.trim().length <= 0 ? false : true
    tagIsValid && setTags(prevState => [...prevState, newTag.trim()])
    setNewTag('')
    tagInputElement.size = 15
    tagInputElement.focus()
  }

  function handleRemoveTag(tagToRemove){
    setTags(prevState => prevState.filter(tag => tag !== tagToRemove))
  }

  return (
    <Container>
      <Header />
      <div className="pageMealContent">
        <div className="newMealContent">
          <a href="#"><img src={caretLeftSvg}></img>voltar</a>
          <h3>Novo prato</h3>
          <p>Imagem do prato</p>
          <label htmlFor='inputMealImg'>
            <img src={uploadSvg} alt="Imagem de uma seta para cima representando o 'upload'" />
            Selecione imagem
          </label>
          <Input placeholder="Selecione Imagem" label="Imagem do prato" id="inputMealImg" type='file' />
          <Input placeholder="Ex.: Salada Ceasar" label="Nome" id="inputMealName" />
          <div className="selectWrapper">
            <label htmlFor="selectInput">Categoria</label>
            <select id="selectInput">
              <option value="refeicao">Refeição</option>
              <option value="principal">Prato principal</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>
          <p>Ingredientes</p>
          <div className='tagWrapper'>
            <CreateTag  placeholder={'Adicionar'}
              isNew
              value={newTag} 
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag} />
          </div>
          <Input placeholder="R$ 00,00" label="Preço" id="inputMealPrice" />
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