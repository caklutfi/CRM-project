import { Button, Container, Row, Col } from "react-bootstrap";
import React from "react";
import Navigasi from "./components/navbar";
import { useLocation, useSearchParams } from "react-router-dom";
import pelanggan from "./database";


function Quotation(){
    let [searchParams] = useSearchParams();
    let nomor = searchParams.get('id') 
    

    return(
    <>
        <Navigasi/>
        <Container>
            <Row>
                <Col sm={1}>
                    <Button>click me</Button>
                </Col>
                <Col>
                    <h1>{pelanggan[nomor].id}</h1>
                    <h1>{pelanggan[nomor].company}</h1>
                    <h1>{`Rp.${pelanggan[nomor].investment}`}</h1>
                </Col>
            </Row>
        
        </Container>
        
    </>
        
    );
}

export default Quotation;