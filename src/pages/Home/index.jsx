import { useState, useEffect } from 'react'

import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { MealCard } from '../../components/MealCard'
import { api } from '../../services/api'


export function Home() {
  const { user } = useAuth()
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchAllMeals(){
      const handleMeals = await api.get(`/meals?searchTerm=${searchTerm}`)
      setMeals(handleMeals.data)
      console.log('pegando meals')
    }
    fetchAllMeals()
  },[searchTerm])

  return (
    <Container className='content'>
      <Header admin={user.is_admin} searchTerm={setSearchTerm}/>
      <div className='content'>
        <Banner className='banner'/>
        <div className='meals'>
          <h2>Refeições</h2>
          <div className="carousel">
            {
              meals.filter(meal => meal.category == 'refeicao').map(meal => (
                <MealCard className='mealCard' key={String(meal.id)} data={meal}/>
              ))
            }
          </div>
          <h2>Pratos principais</h2>
          <div className="carousel">
            {
              meals.filter(meal => meal.category == 'principal').map(meal => (
                <MealCard className='mealCard' key={String(meal.id)} data={meal}/>
              ))
            }
          </div>
          <h2>Bebidas</h2>
          <div className="carousel">
            {
              meals.filter(meal => meal.category == 'Bebidas').map(meal => (
                <MealCard className='mealCard' key={String(meal.id)} data={meal}/>
              ))
            }
          </div>
        </div>
      <Footer />
      </div>
    </Container>
  )
}