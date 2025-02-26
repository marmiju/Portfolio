
import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<Header></Header>} />
      </Routes>

    </div>
  )
}
export default App
