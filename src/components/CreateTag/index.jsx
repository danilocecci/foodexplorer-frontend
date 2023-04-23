import { Container } from './styles'

export function CreateTag({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input type="text" onInput={(e) => e.target.size = e.target.value.length == 0 ? 7 : e.target.value.length + 1} size={isNew ? 7 : (value.length)} maxLength={29} value={value} readOnly={!isNew} {...rest}/>
      <button type='button' onClick={onClick} className={isNew ? 'button-add' : 'button-delete'} >
          {isNew ? "+" : "x"}
        </button>
    </Container>
  )
}