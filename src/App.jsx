
import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'

function App() {

  return (
    <div className=''>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<h1 className='text-white w-full h-screen' >MAR miju</h1>} />
      </Routes>

    </div>
  )
}

export default App
