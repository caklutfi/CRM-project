
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigasi from './components/navbar';
import ProgressCircle from './components/progressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomersTable from './components/table';
import Alarm from './components/alert';
import { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import  axios  from 'axios';
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}





function App() {
  let [notif, setNotif] = useState('default');
  let Fungsi = () => {
    setNotif(notif === 'default'? 'altered':'default');

  }

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      // Fetch data when the button is clicked
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get('https://catfact.ninja/fact');
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      // Call the fetchData function
      fetchData();
    }
  }, [buttonClicked]); // Dependency array ensures effect runs when buttonClicked changes

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="App">
      <Navigasi />
      
      <br/><br/>
      <div> 
      {notif}
      <h1>{data.fact}</h1>

      </div>

      <Container fluid className="container-with-shadow">
        <Row>
          <Col sm={1}>navigasi</Col>
          <Col sm={10}><CustomersTable /></Col>


        </Row>
          
      </Container>
      <Button onClick={Fungsi}>Click me</Button>
      <Button onClick={handleClick}>Call API</Button>



    </div>
  );
}

export default App;
