import { Container } from "./styles"
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom"

import heartSvg from '../../assets/heart.svg'
import pencilSvg from '../../assets/pencil.svg'
import minusSvg from '../../assets/minus.svg'
import plusSvg from '../../assets/plus.svg'
import parmaSvg from '../../assets/parma.svg'

import { Button } from '../Button'

import { api } from '../../services/api'

export function MealCard({src, data, ...rest}){
  const {user} = useAuth()
  const navigate = useNavigate()
  const imageURL = `${api.defaults.baseURL}/files/${data.image}`

  return(
    <Container {...rest}>
      {user.is_admin ? <img src={pencilSvg} alt="Botão de editar" onClick={() => navigate(`/edit/${data.id}`)}/> : <img src={heartSvg} alt="Botão de favoritar" />}
      <div className="dish">
        <img src={imageURL} alt="Imagem do prato Parma" onClick={() => navigate(`/details/${data.id}`)}/>
        <p onClick={() => navigate(`/details/${data.id}`)}>{data.name.length > 18 ? String(data.name).slice(0,18) + '...' : data.name}</p>
        <p className="description" onClick={() => navigate(`/details/${data.id}`)}>{data.description.length > 65 ? String(data.description).slice(0, 65) + '...' : data.description}</p>
        <span>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(data.price)}</span>
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