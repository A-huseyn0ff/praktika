import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import WishPage from './Pages/WishPage';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/wishlist' element={<WishPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
