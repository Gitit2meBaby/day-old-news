import { useState } from 'react'
import './App.scss'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Articles } from './components/Articles'
import { Header } from './components/Header'
import { MiniArticles } from './components/MiniArticles'
import { Business } from './components/Business'
import { AddRoll } from './components/AddRoll'
import { Entertainment } from './components/Entertainment'
import { RealEstate } from './components/RealEstate'
import { Health } from './components/Health'
import { Science } from './components/Science'
import { BannerAdd } from './components/BannerAdd'
import { Technology } from './components/Technology'
import { Sports } from './components/Sports'
// import { InDetail } from './pages/in-detail'
function App() {

  return (
    <>
      <Header />
      <section className='main-grid'>
        <Articles />
        <MiniArticles />
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
    </>
  )
}

export default App
