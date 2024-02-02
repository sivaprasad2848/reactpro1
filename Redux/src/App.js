import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Services from './Components/Services/Service';
import {Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/services" element={<Services/>}/>

    </Routes>
    <Link to="/home">Home</Link>
    <Link to="/contactus">Contactus</Link>
  </>
  );
}

export default App;
