import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import NavBar from './NavBar'
import ProductDetail from './ProductDetail'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}

export default App
