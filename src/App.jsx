import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Blogs from './components/Blogs/Blogs'
import Adds from './components/Adds/Adds'



function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Adds></Adds>
      </div>
    </>
  )
}

export default App
