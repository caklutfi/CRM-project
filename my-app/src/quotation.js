import { Button, Badge, Container, Row, Col, Card, Table} from "react-bootstrap";
import React, {useState}  from "react";
import Navigasi from "./components/navbar";
import { useLocation, useSearchParams } from "react-router-dom";
import pelanggan from "./database";
import {PieChart} from 'react-minimal-pie-chart';
import CustomersTable from "./components/table";
import './BlinkingBadge.css'

import {collection, addDoc} from 'firebase/firestore'


function Quotation(){
    let [searchParams] = useSearchParams();
    let nomor = searchParams.get('id') 
    let investment = pelanggan[nomor].investment 
    
    let sums = pelanggan[nomor].bom[1]*pelanggan[nomor].bom[2]
    function sumItem() {
        return (pelanggan[nomor].bom[1]*pelanggan[nomor].bom[2]);
    };


    const [showForm, setShowForm] = useState(false);
    const [rowData, setRowData] = useState([]);

    const handleAddRowClick = () => {
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newRow = [];
        for (let i = 0; i < 5; i++) {
            newRow.push(formData.get(`column${i + 1}`));
        }
        setRowData([...rowData, newRow]);
        setShowForm(false);
    }

    return(
    <>
        <Navigasi/>
        <Container>
            <Row>
                <Col style={{padding:'20px'}}>
                <h4><Badge className='blinking-badge' bg="success">Open</Badge></h4>
                <h1>QN.xx{pelanggan[nomor].qn}v{pelanggan[nomor].revision} {pelanggan[nomor].company} - {pelanggan[nomor].typeOfDeal}</h1>
                <p>Representative: {pelanggan[nomor].representative} - <a href='https://www.google.com' target="_blank">{pelanggan[nomor].email}</a> - {pelanggan[nomor].phone} | Last followed up <Badge bg='danger'>25 days ago</Badge></p>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <PieChart startAngle={90} animate animationDuration={500}
                radius={40}
                    data={[
                        { title: 'Investment', value: pelanggan[nomor].investment, color: '#E38627' },
                        { title: 'Net Margin', value: pelanggan[nomor].netProfit, color: '#C13C37' },
                    ]}
                    />;
                </Col>
                <Col sm={3}>
                    <Card  class='shadow-lg p-3 mb-5 white rounded' style={{fontWeight: 'bold'}}>
                    <Card.Header>Value</Card.Header>
                    <Card.Body style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card.Title class='p-4' style={{ fontSize: '40px' }}>{`Rp.${pelanggan[nomor].value}`}</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card class='shadow-lg p-3 mb-5 white rounded' style={{fontWeight: 'bold'}}>
                    <Card.Header>Net Margin</Card.Header>
                    <Card.Body style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card.Title class='p-4' style={{ fontSize: '40px' }}>{pelanggan[nomor].netMargin}</Card.Title>
                    </Card.Body>
                    <div style={{ 
                        width: '100%', // Ensure the line strip spans the full width of the card
                        height: '3px', 
                        backgroundColor: 'blue' // Set color of the line strip
                    }}></div>
                    </Card>
                </Col>
                <br/><br/>    
            </Row>
            <Row>
                <br/><br/>
                <h2>Bill of Material <Button type='success' onClick=''> + Add item</Button></h2>
                <p>Last updated 24/03/2024</p>

              


                <Table>
                    <thead>
                        <tr>
                        <td>No</td>
                        <td>Item</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Measurement</td>
                        <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{pelanggan[nomor].bom[0].no}</td>
                        <td>{pelanggan[nomor].bom[0].item}</td>
                        <td>{pelanggan[nomor].bom[0].price}</td>
                        <td>{pelanggan[nomor].bom[0].qty}</td>
                        <td>{pelanggan[nomor].bom[0].uom}</td>                            
                    </tr>
                    <tr>
                    
                    </tr> 


                    </tbody>

                </Table>
                        
            <Table>
                <thead>
                        <tr>
                        <td>No</td>
                        <td>Item</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Measurement</td>
                        <td>Total</td>
                        </tr>
                </thead>
                <tbody>
                    {rowData.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th>Grand Total</th>
                        <th/><th/><th/><th/>
                        <th>15400000</th>
                    </tr>
                </tbody>
            </Table>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <td>
                    
                        <input type="text" name="column1" placeholder="No" />
                    
                    </td>
                    <td>

                        <input type="text" name="column2" />

                    </td>
                    <td>
                    
                        <input type="text" name="column3" />
                    
                    </td>
                    <td>
                    
                        <input type="text" name="column4" />
                    
                    </td>
                    <td>
                    
                        <input type="text" name="column5" />
                    
                    </td>
                    <button type="submit">Submit</button>
                </form>
            )}
                <Button onClick={handleAddRowClick}>Add Row</Button>
            </Row>
        
        </Container>
        
    </>
        
    );
}

export default Quotation;