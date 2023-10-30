import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Articles } from './components/Articles'
import { Header } from './components/Header'
import { Business } from './components/Business'
import { AddRoll } from './components/AddRoll'
import { Entertainment } from './components/Entertainment'
import { RealEstate } from './components/RealEstate'
import { Health } from './components/Health'
import { Science } from './components/Science'
import { BannerAdd } from './components/BannerAdd'
import { Technology } from './components/Technology'
import { Sports } from './components/Sports'
import { Footer } from './components/Footer'
import { AlsoLike } from './components/AlsoLike'
import { InDetail } from './pages/in-detail'


function App() {

  return (
    <>
      <InDetail />
      <Header />
      <section className='main-grid'>
        <Articles />
        <AddRoll />
      </section>
      <Business />
      <Entertainment />
      <RealEstate />
      <Health />
      <Science />
      <BannerAdd />
      <Technology />
      <Sports />
      <AlsoLike />
      <Footer />
    </>
  )
}

export default App
