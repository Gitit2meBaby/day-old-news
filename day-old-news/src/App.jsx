// import { useState } from 'react'
import './App.scss'
import { Articles } from './components/Articles'
import { Header } from './components/Header'
import { MiniArticles } from './components/MiniArticles'
import { Business } from './components/Business'
import { AddRoll } from './components/AddRoll'
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
    </>
  )
}

export default App
