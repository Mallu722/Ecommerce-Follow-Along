import './App.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,Home,CreateProduct,MyProduct,Cart} from './Routes/routes.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/product" element={<CreateProduct/>}/>
      <Route path="/product/:id" element={<CreateProduct/>}/>
        <Route path="/myproduct" element={<MyProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<productDetails/>}/>
    </Routes>
    </BrowserRouter>  
  )
}

export default App;