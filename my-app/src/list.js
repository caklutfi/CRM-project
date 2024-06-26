
import './App.css';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import Navigasi from './components/navbar';
import ProgressCircle from './components/progressBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomersTable from './components/table';
import Alarm from './components/alert';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import  axios  from 'axios';
import { db } from './firebase';
import {getDocs, collection, onSnapshot} from "firebase/firestore";




function List() {
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

  const [user,setUser] = useState([])

  useEffect(()=>{
    const unsub = onSnapshot(collection(db,'erp'),(snapshot)=>{
      //console.log(snapshot.docs[0].data())
      const storeData = snapshot.docs.map(doc => ({
        ...doc.data()
      }))
      setUser(storeData)
      //console.log(snapshot.docs)
    });
    return unsub
  },[])

  console.log(user)






  return (
    <>
    <div className="App">
      <Navigasi />
      
      <br/><br/>
      <div> 
      {notif}
      <h1>{data.fact}</h1>

      </div>

      <Container fluid className="container-with-shadow">
        <Row>
          <Col><CustomersTable /></Col>


        </Row>
      </Container>
      <Button onClick={Fungsi}>Click me</Button>
      <br/>
      



    </div>

    </>
  );
}

export default List;
