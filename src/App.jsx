import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Blogs from './components/Blogs/Blogs'
import Adds from './components/Adds/Adds'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const[wantCook, setWantCook] = useState([]);

  const handleWantToCook = blog => {

    if (!wantCook.includes(blog)) {
      const newWantCook = [...wantCook, blog];
      setWantCook(newWantCook);
    } else {
      alert('Recipe is already selected!');
      
      // toast.error('You have already selected this recipe!', {
      //   position: toast.POSITION.TOP_CENTER
      // });
    }
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
