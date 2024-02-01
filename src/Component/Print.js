import React, { useState } from 'react'

export const Print = (props) => {

    var d = new Date()
    var id1 = document.getElementById("billprint")
    props.bag6(id1)
    const [sdata, setsdata] = useState([])
    const StoreData = () => {
        setsdata([...sdata, props.bag1])

    }
    console.log(sdata)
    return (
        <div className='kkkkk' id='billprint' align='center' >
            <div className='kkkkk3' align='center'>
                <h4>SAI MART</h4>
                <h6>Vabdeshwari, Shingnapur Road, Phaltan</h6>
                <h5>GST NO: 278549ACD88</h5>
            </div>
            <div className='kkkkk1 row'>
                <div className='col-lg-3'>Bill no:{props.bag5}</div>
                <div className='col-lg-9'>Date:{d.toLocaleString()}</div>
                <div className='col-lg-12'>Customer Name:{props.bag8}</div>
            </div>
            <div>
                <table id='dede' border={1} cellPadding={"15px"} cellSpacing={0}>
                    <tr className='kkkkk2'>
                        <td>SN.</td>
                        <td>Product </td>
                        <td>Qty</td>
                        <td>MRP</td>
                        <td>Rate</td>
                        <td>Total</td>
                    </tr>
                    {
                        props.bag1.map((data, index) => (
                            <tr key={index}>
                                <td>{Number(index) + 1}</td>
                                <td>{data.name3}</td>
                                <td>{data.count3}</td>
                                <td>{data.price3}</td>
                                <td>{data.Sprice3}</td>
                                <td>{data.total}</td>
                            </tr>
                        ))
                    }


                    <tr >
                        <td colSpan={6} align='center'>Your Savings:{props.bag4}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Total Qty:{props.bag2}</td>
                        <td colSpan={3}>Total Bill:{props.bag3}</td>
                    </tr>
                    <tr>
                        <td colSpan={6} align='center'>Thank You!</td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{ padding: "5px" }} align='center'><button onClick={StoreData}>Print</button></td>
                        <td colSpan={3} style={{ padding: "5px" }} align='center'><button>Close</button></td>
                    </tr>
                </table>
            </div>

        </div>
    )
}
