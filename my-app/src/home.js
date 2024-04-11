import React from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Navigasi from "./components/navbar";


function Home() {
    
   const navigate = useNavigate();
   const checkList = ()=>{
    navigate('/list');
   };


    return(

        <>
    <Navigasi/>
    <Container>
        <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
                <Button onClick={checkList}> List Customer</Button>
            </Col>
            <Col sm={4}>
            </Col>

        </Row>
    </Container>
    </>

    );    
};

export default Home;