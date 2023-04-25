import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import MainBody from './components/MainBody'
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
        <Route path='technology' element={<Technology/>} />
      </Route>
    )
  )

  return (
    <div className="App">
      {/* <Header/> */}
      {/* <MainBody/> */}
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
 
  return (
   <>
     <Header />
     {/* <div>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
      <Link to='/technology'>Technology</Link>
     </div> */}
     <div>
         <Outlet />
     </div>
   </>
 
  )
 }

export default App
