import { useState, useEffect, useRef } from 'react'

import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { MealCard } from '../../components/MealCard'
import { api } from '../../services/api'

import leftArrowSvg from '../../assets/leftArrow.svg'
import rightArrowSvg from '../../assets/rightArrow.svg'


export function Home() {
  const { user } = useAuth()
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  let slider
  
  function handleLeftArrowClick(event){
    event.preventDefault();
    if(event.target.parentNode.parentNode.childNodes[1].className == "carousel"){
      slider = event.target.parentNode.parentNode.childNodes[1]
    } else {
      slider = event.target.parentNode.childNodes[1]
    }
    slider.scrollLeft -= slider.offsetWidth;
    slider
  }

  function handleRightArrowClick(event){
    event.preventDefault();
    if(event.target.parentNode.parentNode.childNodes[1].className == "carousel"){
      slider = event.target.parentNode.parentNode.childNodes[1]
    } else {
      slider = event.target.parentNode.childNodes[1]
    }
    slider.scrollLeft += slider.offsetWidth;
    slider
  }

  useEffect(() => {
    async function fetchAllMeals(){
      const handleMeals = await api.get(`/meals?searchTerm=${searchTerm}`)
      setMeals(handleMeals.data)
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
          <section>
            <div className="leftArrow" onClick={handleLeftArrowClick}>
              <img src={leftArrowSvg} alt="Seta para esquerda" />
            </div>
            <div className="carousel" ref={this}>
              {
                meals.filter(meal => meal.category == 'refeicao').map(meal => (
                  <MealCard className='mealCard' key={String(meal.id)} data={meal} />
                ))
              }
            </div>
            <div className="rightArrow" onClick={handleRightArrowClick}>
              <img src={rightArrowSvg} alt="Seta para direita" />
            </div>
          </section>

          <h2>Pratos principais</h2>
          <section>
            <div className="leftArrow" onClick={handleLeftArrowClick}>
                <img src={leftArrowSvg} alt="Seta para esquerda" />
              </div>
            <div className="carousel" ref={slider}>
              {
                meals.filter(meal => meal.category == 'principal').map(meal => (
                  <MealCard className='mealCard' key={String(meal.id)} data={meal}/>
                ))
              }
            </div>
            <div className="rightArrow" onClick={handleRightArrowClick}>
              <img src={rightArrowSvg} alt="Seta para direita" />
            </div>
          </section>
          
          <h2>Bebidas</h2>
          <section>
            <div className="leftArrow" onClick={handleLeftArrowClick}>
              <img src={leftArrowSvg} alt="Seta para esquerda" />
            </div>
            <div className="carousel" ref={slider}>
              {
                meals.filter(meal => meal.category == 'bebida').map(meal => (
                  <MealCard className='mealCard' key={String(meal.id)} data={meal}/>
                ))
              }
            </div>
            <div className="rightArrow" onClick={handleRightArrowClick}>
              <img src={rightArrowSvg} alt="Seta para direita" />
            </div>
          </section>
        </div>
      <Footer />
      </div>
    </Container>
  )
}