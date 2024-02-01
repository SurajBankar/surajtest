import React, { createElement, useState } from 'react'
import { Customer1 } from './Customer1';
import { Print } from './Print';




export const Customer_Details = (props) => {

    var d = new Date();
    const [c_name, Sc_name] = useState();
    const [c_Mobile, Sc_Mobile] = useState();

    const [c_Address, Sc_Address] = useState();
    const CUDTEMER_DETAILS = (q) => {
        props.bag8(props.bag1[q.target.value].name)
      
        Sc_name(props.bag1[q.target.value].name)
        Sc_Mobile(props.bag1[q.target.value].mobile)
        Sc_Address(props.bag1[q.target.value].address)
    }
    var bno = props.bag5
    var d = new Date()
    let billnum = 0
   
    const Save = (q) => {
        billnum += 1;
        props.bag4(billnum);
        props.bag9(1);
        var id3 = props.bagg6// id of print component
        var c = window.open('', '', 'height=500, width=400');
        c.document.write('<html>');
        c.document.write("<body>");
        c.document.write(id3.innerHTML);
        c.document.write('</body></html>');
        c.document.close();
        c.print();
    }


    return (
        <div>

            <h4>Customer Details</h4>
            <select className='jjjj' onChange={CUDTEMER_DETAILS}>
                <option>Select</option>
                {
                    props.bag1.map((elem, index) => (
                        <Customer1
                            name2={elem.name}
                            index2={index}
                        />
                    ))
                }
            </select>
            <table id='ouou'>
                <tr>
                    <th>Customer Name :</th>
                    <td>{c_name}</td>
                </tr>
                <tr>
                    <th>Customer Mobile :</th>
                    <td>{c_Mobile}</td>
                </tr>
                <tr>
                    <th>Customer Address :</th>
                    <td>{c_Address}</td>
                </tr>
            </table>
            <h4 className='ioio' id='ytyt'>Bill Date</h4>
            <input value={d.toString()} className='Amaunt'></input>
            <h4 className='ioio'>Payment Deatails</h4>
            <select className='jjjj'>
                <option>Select</option>
                <option>Cash</option>
                <option>Online</option>
            </select>
            <input value={props.bag3} className='Amaunt my-2'></input>
            <h4 className='ioio'>Bill Deatails</h4>
            <div className='tamount'>
                <h5>Total Ammount</h5>
                <h3>{Math.round(props.bag3)}</h3>
            </div>
            <div id='kjkj'>
                <button onClick={Save} className='bg-success'>Save</button>
                <button onClick={props.bag9} className='bg-warning'>Clear</button>
            </div>
        </div>
    )
}
