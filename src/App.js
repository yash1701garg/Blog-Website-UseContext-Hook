import React, { useContext, useEffect } from 'react'
import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Pagintion from "./Components/Pagination"
import { AppContext } from './context/AppContext'

const App = () => {
  const {fetchBlogPost} = useContext(AppContext);
  useEffect(()=> {
    fetchBlogPost();
  },[])
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center text-center items-center'>
      
      <Header/>
      <Blogs/>
      <Pagintion/>
    </div>
  )
}

export default App