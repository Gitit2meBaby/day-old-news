// import { useState } from 'react'
import './App.scss'
import { Articles } from './components/Articles'
import { Header } from './components/Header'
import { MiniArticles } from './components/MiniArticles'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <Articles />
      </section>
      <MiniArticles />
    </>
  )
}

export default App
