import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import NavBar from './NavBar'
import ProductDetail from './ProductDetail'
import Dashboard from './dashboard/DashBoard'
import Profile from './dashboard/Profile'
import Orders from './dashboard/Orders'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
             <Dashboard/>
          </ProtectedRoute>
        }>
           <Route index element={<h1>Select Profile or Orders!</h1>}/>
           <Route path='profile' element={<Profile/>} />
           <Route path='orders' element={<Orders/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
