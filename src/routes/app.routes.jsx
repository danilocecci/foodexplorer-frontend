import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { MealDetails } from '../pages/MealDetails'
import { NewMeal } from '../pages/NewMeal'
import { EditMeal } from '../pages/EditMeal'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/details/:id' element={<MealDetails />} />
      <Route path='/new' element={<NewMeal />} />
      <Route path='/edit/:id' element={<EditMeal />} />
    </Routes>
  )
}