import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';

import HomeComponent from './components/HomeComponent/HomeComponent';
import CartComponent from './components/CartComponent/CartComponent';

function App() {
  return (
    <Router>
      <div className="App">
      <header className='header'>
        <Link to = "/" className='linker'><h2>Soulster</h2></Link>

        <ul className='navbar'>
          <li className='nav-item'>
            <Link to ="/" className='linker'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to ="/cart" className='linker'>Cart</Link>
          </li>
          
        </ul>
      </header>
      <div className='section'>
        <Routes>
          <Route exact path='/' element ={<HomeComponent/>} />
          <Route exact path ='/' element ={<CartComponent/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
