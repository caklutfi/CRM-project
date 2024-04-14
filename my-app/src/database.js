import Form from 'react-bootstrap'

const pelanggan =[{

    id:0,
    qn:67,
    date: Date('2024-04-11T12:00:00'),
    revision:1,
    company:'PT Lautan Natural Krimerindo',
    representative:'Pak Rofiq',
    email: 'rofiqul@lnk.co.id',
    phone: '085770006777',
    dueDate:'2024/5/23',
    typeOfDeal:'Project',
    value:125000000,
    investment:67000000,
    netMargin:'86%',
    netProfit:58000000,
    note:'open',
    bom:
        [
            {
                no: 1,
                item: 'kontainer 40ft bekas', 
                price: 780000000, 
                qty:1,
                uom: 'Unit'
            }
        ],


    
},
{
    id:1,
    qn:83,
    revision:1,
    company:'PT Neira Bumi Energi',
    representative:'',
    dueDate:'2024/4/17',
    typeOfDeal: 'Project',
    value: 15400000,
    investment:12000000,
    netMargin:'21%',
    netProfit:3400000,
    note:'open',
    bom:[
        {
            no: 1,
            item: 'panel PV DC Combiner', 
            price: 3400000, 
            qty:3,
            uom: 'Set'
        },
        {
            no: 2,
            item: 'jasa pengiriman', 
            price: 400000, 
            qty:1,
            uom: 'Lot'
        }
    ],
}];

export default pelanggan;