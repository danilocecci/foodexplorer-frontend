import { Container } from './styles'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { MealCard } from '../../components/MealCard'


export function Home() {
  let admin = false

  return (
    <Container className='content'>
      <Header admin={admin} />
      <div className='content'>
        <Banner className='banner'/>
        <div className='meals'>
          <h2>Refeições</h2>
          <div className="carousel">
            <MealCard className='mealCard'/>
            <MealCard className='mealCard'/>
            <MealCard className='mealCard'/>
          </div>
          <h2>Pratos principais</h2>
          <div className="carousel">
            <MealCard className='mealCard'/>
            <MealCard className='mealCard'/>
          </div>
          <h2>Sobremesas e bebidas</h2>
          <div className="carousel">
            <MealCard className='mealCard'/>
          </div>
        </div>
      <Footer />
      </div>
    </Container>
  )
}