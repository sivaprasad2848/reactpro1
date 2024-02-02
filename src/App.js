import Footer from "./Components/Footer/Footer";
import Datacollector from "./Components/Datacollector/Datacollector";
import { useState } from "react";
import C1 from './Components/C1/C1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import {Routes,Route} from 'react-router-dom';
function App() {
  var [name,setName]=useState('Sam');
  const transferName=(name1)=>{
    //console.log("I am parent",name1);
    setName(name1);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
