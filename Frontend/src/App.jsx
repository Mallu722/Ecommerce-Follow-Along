import './App.css'
// eslint-dis4able-next-line
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import {LoginPage} from './Routes/routes.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>  
  )
}  

export default App;