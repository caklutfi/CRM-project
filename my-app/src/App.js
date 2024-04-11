
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigasi from './components/navbar';
import ProgressCircle from './components/progressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomersTable from './components/table';
import Alarm from './components/alert';
import { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import  axios  from 'axios';
import List from './list';
import Quotation from './quotation';
import Home from './home';






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="quotation" element={<Quotation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
