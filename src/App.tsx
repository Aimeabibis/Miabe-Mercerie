
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { Home } from './pages/home'
import { New } from './pages/newproducts'
import { Categories } from './pages/categories'
import { Contact } from './pages/contact'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newproducts" element={<New />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          
          
        </Routes>          
        </BrowserRouter>
        
      </div>
     
    </>
  )
}

export default App
