import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart'
import data from './data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { products, cart } = data;

  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
            <Route path='/products' element={<ProductList products={products}/>} />
            <Route path='/products/:id' element={<ProductDetails/>} />
            <Route path='/shopping-cart' element={<Cart cart={cart}/>} />
            <Route path='/' element={<ProductList products={products}/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
