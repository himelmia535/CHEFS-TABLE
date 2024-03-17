import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Blogs from './components/Blogs/Blogs'
import Adds from './components/Adds/Adds'
import { useState } from 'react'



function App() {

  const[wantCook, setWantCook] = useState([]);

  const handleWantToCook = blog => {
    const newWantCook = [...wantCook, blog];
    setWantCook(newWantCook);
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='md:flex'>
        <Blogs handleWantToCook={handleWantToCook}></Blogs>
        <Adds wantCook={wantCook}></Adds>
      </div>
    </>
  )
}

export default App
