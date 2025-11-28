import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Restaurant from './components/restaurant/Restaurant.jsx';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
   <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path = '/login' element = {<Login />}/>
        <Route exact path = '/restaurant' element = {<Restaurant /> }/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
