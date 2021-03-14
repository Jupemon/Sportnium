import logo from './logo.svg';
import React from 'react';
import './App.css';
import Topnav from './Components/Topnav';
import Banner from './Components/Sections/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Topnav/>
    <Banner/>
    </div>
  );
}

export default App;
