import {Table, Dropdown, Form, Button, Alert, Container,Row, Col} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import Alarm from './alert';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import pelanggan from '../database';
import { db } from '../firebase';
import {getDocs, collection, onSnapshot, doc, setDoc, addDoc} from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';


function greeting() {
    alert("Hello! I am an alert box!!")
}

let variables = [
    '#',
    'QN',
    'Revision',
    'Company',
    'Representative',
    'Due Date',
    'Type of Deals',
    'Value',
    'Investment',
    'Net margin',
    'Net Profit',
    'Status',
    'Edit']



function CustomersTable() {


  
    const [user,setUser] = useState([])
    useEffect(()=> {
        const unsub = onSnapshot(collection(db,'erp'),(snapshot)=>
        setUser(snapshot.docs.map(doc => doc.data()))
      );

    
    return () => unsub();
    },[])

    console.log(user)

  
      
    
    const navigate = useNavigate();
    const checkQuotation = (nomor)=> {
    navigate(`/quotation?qn=${nomor}`);
    };

      let dataUSer = user.map(individual=>
      <tr>
        <td>{individual.qn}</td>
        <td>{individual.qn}</td>
        <td>{individual.revision}</td>
        <td>{individual.company}</td>
        <td>{individual.representative}</td>
        <td>{Date(individual.dueDate)}</td>
        <td>{individual.typeOfDeal}</td>
        <td>{individual.value}</td>
        <td>{individual.investment}</td>
        <td>###</td>
        <td>###</td>
        <td>###</td>
        <td><Button onClick={() => checkQuotation(individual.qn)}>Edit</Button></td>
      </tr>
      );

      const [formData, setFormData] = useState({
      });

      const handleChange = (e)=>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      function greeting(a,b) {
        alert({a},{b})
    }

    const [showForm, setShowForm] = useState(false);

    const addRowClick = ()=>{
      setShowForm(true);
    };
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log('Form submited', formData);
      console.log(formData);
      setShowForm(false);

      try {
        //push data to firestore
        await addDoc(collection(db,'erp'),
        {
          qn: formData.qn,
          company: formData.company,
          representative: formData.representative,
          dueDate: formData.dueDate,
          typeOfDeal: formData.typeOfDeal,
          value: formData.value,
          investment: formData.investment
          
        });
        console.log(typeof formData.value)
        console.log(typeof formData.investment)
        console.log(typeof formData.typeOfDeal)

        setFormData({});
      } catch (error) {
        console.error('error',error)
      }

    };

    return (
    <>
    <Container>
      <Row>
    <Table striped>
    <thead>
      <tr>
           {variables.map((variable) => (
            <th>{variable}</th>
           ))}
        </tr>
      </thead>
      <tbody>
        {dataUSer}
      </tbody>
    </Table>
    </Row>
    <Row>
      <Table striped variant='dark'>
        <tbody>
          {showForm && (
           <td>
          <Form onSubmit={handleSubmit}>
          <td>
          <Form.Group controlId="formBasicQN">
            <Form.Label>QN</Form.Label>
            <Form.Control
              type="text"
              name="qn"
              placeholder="QN"
              value={formData.qn}
              onChange={handleChange}
            />
          </Form.Group>
          </td>
          <td>
          <Form.Group controlId="formBasicCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          </td>
          <td>
          <Form.Group controlId="formBasicRepresentative">
            <Form.Label>Representative</Form.Label>
            <Form.Control
              type="text"
              name="representative"
              placeholder="Person/representative"
              value={formData.representative}
              onChange={handleChange}
            />
          </Form.Group>
          </td>
          <td>
          <Form.Group controlId="formBasicDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              placeholder="DueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </Form.Group>
          </td>
          <td>
          <Form.Group  controlId="formBasicTypeOfDeal">
            <Form.Label>Type of Deal</Form.Label>
            <Form.Select name='typeOfDeal' onChange={handleChange} aria-label="Default select example">
              <option>Select</option>
              <option value="Project">Project</option>
              <option value="Goods">Goods</option>
            </Form.Select>

          </Form.Group>
          </td>
          <td>
          <Form.Group controlId="formBasicValue">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="number"
              name="value"
              placeholder="0"
              value={formData.value}
              onChange={handleChange}
            />
          </Form.Group>
          </td>
          <td>
          <Form.Group controlId="formBasicInvestment">
            <Form.Label>Investment</Form.Label>
            <Form.Control
              type="number"
              name="investment"
              placeholder="0"
              value={formData.investment}
              onChange={handleChange}
            />
          </Form.Group>
          </td>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </td>
        )}

        </tbody>
      
      </Table>
    </Row>
    <Row>
      <Button onClick={addRowClick}>Add Row</Button>
    </Row>
    </Container>
    </>
  );
};
export default CustomersTable;