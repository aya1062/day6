import './App.css'
import BooksPage from './page/BooksPage'
import CartPage from './page/CartPage'
 import { NavLink, Route, Routes } from 'react-router-dom' 
function App() {

  return (
    <>
         <ul>
      <li><NavLink to="/BookPage">Show Books</NavLink></li>
      <li><NavLink to="/CartPage">Show cert</NavLink></li>

    </ul>
    <Routes>
      <Route path='BookPage' element={<BooksPage></BooksPage>}></Route>
      <Route path='CartPage' element={<CartPage></CartPage>}></Route>
    </Routes>
    
    </>
  )
}

export default App
