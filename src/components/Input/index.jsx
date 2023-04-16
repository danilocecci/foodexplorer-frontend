import { Container } from "./styles"

export function Input({ placeholder, label, id, type, icon, ...rest }){
  return(
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="inputWrapper">
        {icon && <img src={icon}></img>}<input placeholder={placeholder} {...rest} id={id} type={type}/>
      </div>
    </Container>
  )
}