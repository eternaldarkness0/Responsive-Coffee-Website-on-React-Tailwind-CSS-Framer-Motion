import React from 'react'
import { Main } from './components/Main/Main'
import { Cards } from './components/Cards/Cards'
import { BuyCoffee } from './components/BuyCoffee/BuyCoffee'
import { AppBanner } from './components/AppBanner/AppBanner'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Main />
      <Cards />
      <BuyCoffee />
      <AppBanner />
      <Footer />
    </div>
  )
}
