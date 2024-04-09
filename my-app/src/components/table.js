import {Table, Dropdown, Form, Button, Alert} from 'react-bootstrap';
import React, {useState} from 'react';
import Alarm from './alert';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

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
    'Note',
    'Edit']

let customers = [{
    id:1,
    qn:67,
    revision:1,
    company:'PT Lautan Natural Krimerindo',
    representative:'Pak Rofiq',
    dueDate:'2024/5/23',
    typeOfDeal:'Project',
    value:125000000,
    investment:67000000,
    netMargin:'86%',
    netProfit:58000000,
    note:'open',
    button:<Button>Quick Edit</Button>

    
},{
    id:1,
    qn:83,
    revision:1,
    company:'PT Neira Bumi Energi',
    representative:'',
    dueDate:'2024/4/17',
    typeOfDeal:<Form.Select aria-label="Default select example">
    <option value="1">Goods</option>
    <option value="2">Project</option>
  </Form.Select>,
    value:15400000,
    investment:12000000,
    netMargin:'21%',
    netProfit:3400000,
    note:'open',
    button:<Button>Quick Edit</Button>
}   
]

var customer1 = [
    1,
    67,
    1,
    'PT Lautan Natural Krimerindo',
    'Pak Rofiq',
    '2024/5/23',
    <Form.Select aria-label="Default select example">
      <option value="1">Goods</option>
      <option value="2">Project</option>
    </Form.Select>,
    125000000,
    67000000,
    '86%',
    58000000,
    'Open',
    <Button>Quick Edit</Button>
]

var customer2 = [
    2,
    83,
    1,
    'PT Neira Bumi Energi',
    '',
    '2024/5/15',
    <Form.Select aria-label="Default select example">
        <option value="1">Goods</option>
        <option value="2">Project</option>
    </Form.Select>,
    15400000,
    12000000,
    '21%',
    3400000,
    'Open',
    <Button>Quick Edit</Button>
]

var customer3 = [
    3,
    107,
    1,
    'PT DIC Graphics',
    'Pak Wid',
    '2024/4/17',
    'Project',
    98000000,
    68000000,
    '35%',
    30000000,
    'Open',
    <Button onClick={greeting}>Quick Edit</Button>
]



function CustomersTable() {

    const listItems = customers.map(customer =>
    <tr>
        <td>{customer.id}</td>
        <td>{customer.qn}</td>
        <td>{customer.revision}</td>
        <td>{customer.company}</td>
        <td>{customer.representative}</td>
        <td>{customer.dueDate}</td>
        <td>{customer.typeOfDeal}</td>
        <td>{customer.value}</td>
        <td>{customer.investment}</td>
        <td>{customer.netMargin}</td>
        <td>{customer.netProfit}</td>
        <td>{customer.note}</td>
        <td><Button onClick={[]}>Edit</Button></td>
    </tr>
    );

    return (
    <>

    <Table>
    <thead>
      <tr>
           {variables.map((variable) => (
            <th>{variable}</th>
           ))}
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </Table>
    </>

    
  );
};

export default CustomersTable;