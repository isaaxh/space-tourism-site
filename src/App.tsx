import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
   <>
      <Header />
      <Outlet />
   </>
 
  )
 }

export default App
