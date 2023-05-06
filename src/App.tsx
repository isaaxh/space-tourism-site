import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import { createRef, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from './contexts/AppContext'
import Sidebar from './components/sidebar/Sidebar'
// import img from './assets/home/background-home-mobile.jpg'


function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  const handleMenuOpenState = (nextState: boolean) => {
    setMenuOpen(nextState);
  }
  
  
  const appStyle = {
    // backgroundImage: `url('./assets/${currentTab}/background-${currentTab}-mobile.jpg')`
    // backgroundImage: `url(${img})`
  }

  return (
    <div className={`App ${isMenuOpen ? 'disable-scroll' : ''}`}>
      <AppContext.Provider value={{
        handleActiveTabState, 
        handleMenuOpenState, 
        isMenuOpen
        }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

const Root = () => {
  
  const { isMenuOpen, handleMenuOpenState } = useContext(AppContext)

  return (
   <>
      <Header />
      <Outlet />
      <Sidebar />
      {isMenuOpen && <div className="sidebar-overlay" onClick={() => handleMenuOpenState(false)} />}
   </>
  )
 }

export default App;
