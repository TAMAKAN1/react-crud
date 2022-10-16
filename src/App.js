import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Create from './pages/create';
import Edit from './pages/edit';
import View from './pages/view';
function App() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li className="nav-item ">
              <Link to={'/contact'}  className='nav-link'>Contact</Link>
            </li>
            <li className="nav-item ">
              <Link to={'/user-create'}  className='nav-link'>Create</Link>
            </li>
          
          </ul>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user-create' element={<Create />} />
          <Route path='/user-edit/:id' element={<Edit />} />
          <Route path='/user-view/:id' element={<View />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
