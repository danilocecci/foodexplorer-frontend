import { Container } from "./styles"

export function Input({ placeholder, label, id, type, ...rest }){
  return(
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <input placeholder={placeholder} {...rest} id={id} type={type}/>
    </Container>
  )
}