
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import Navbar from './layout/navbar';
import Home from './pages/home';
import AddProduct from './product/addProduct';
import EdtiProduct from './product/editProduct';
import AllProduct from './product/allProduct';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addProduct" element={<AddProduct/>}/>
        <Route exact path='/editProduct/:id' element={<EdtiProduct/>}/>
        <Route exact path='/allProduct' element={<AllProduct/>}/>
      </Routes>
      </Router>
      

    </div>
  );
}

export default App;