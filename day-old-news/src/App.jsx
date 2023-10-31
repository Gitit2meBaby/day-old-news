import './App.scss'
import { Route, Routes } from 'react-router-dom'
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
import { NotFound } from './pages/NotFound'
import { SignUp } from './pages/SignUp'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />
        <Route path="/indetail" element={<InDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

