import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Navigasi from "./components/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    
   const navigate = useNavigate();
   const checkList = ()=>{
    navigate('/list');
   };


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://catfact.ninja/fact');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

   // useEffect(() => {
         // Fetch data when the component mounts
    //}, []); // Empty dependency array means this effect runs only once after the initial render

    const klik = ()=>{
        fetchData();
    }    

    

    return(

        <>
    <Navigasi/>
    <Container>
        <br/>
        <Row>
        <Col sm={4}>
            <Card onClick={checkList}
            bg='white'
            key='whites'
            text='dark'
            style={{ width: '18rem' }}
            className="p-2 shadow-sm"
            >

            <Card.Body>
                <Card.Title>Quotation</Card.Title>
                <Card.Text>
                Query of outgoing quotation.
                </Card.Text>
                <Button>Open Quotation List</Button>
            </Card.Body>
            </Card>
            </Col>

            <Col sm={4}>
            <Card onClick={checkList}
            bg='white'
            key='whites'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2 shadow-lg"
            >

            <Card.Body>
                <Card.Title>Customer</Card.Title>
                <Card.Text>
                Collection of representative people from company
                </Card.Text>
                <Button>Open Quotation List</Button>
            </Card.Body>
            </Card>
            </Col>

        </Row>
    </Container>
    <div>
            <Button onClick={fetchData}>Fetch Data</Button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.fact}
                    {console.log(data.fact)}
                </ul>
            )}
        </div>

    </>

    );    
};

export default Home;