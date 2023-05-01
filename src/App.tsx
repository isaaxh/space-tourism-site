import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import { useEffect, useState } from 'react'
import { AppContext } from './contexts/AppContext'


function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

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

  const handleActiveTabState = (activeTab: string) => {
    setCurrentTab(activeTab);
  }

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab])
  
  
  const appStyle = {
    backgroundImage: `url('./assets/${currentTab}/background-home-mobile.jpg')`
  }

  return (
    <div className="App" >
      <AppContext.Provider value={{handleActiveTabState}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
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
