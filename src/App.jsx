// import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
function App() {
let movie={title:"movie",url:'Screenshot from 2024-05-23 19-48-44.png'}
  return (
    <>
    <MovieCard movie={movie} />
   </>
  )
}

export default App
