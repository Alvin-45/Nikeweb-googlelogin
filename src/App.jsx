import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import Nike from './components/Nike'

function App() {


  return (
    <>
      
      <Routes>
           <Route path='/' element={<Nike />}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route>
      <Route path='/*' element={<Nike />}></Route>

     </Routes>
    </>
  )
}

export default App