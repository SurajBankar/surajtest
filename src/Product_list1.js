import React from 'react'

export const Product_list1 = (props) => {
    // alert(props.bag1)
    console.log(props.bag1);
    return (
        <div>
            <table className='text-center' id='oyoy'>
                <tr className='adad'>
                    <td>No</td>
                    <td>Item Name</td>
                    <td>Qty</td>
                    <td>MRP</td>
                    <td>Sale Price</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {
                    props.bag1.map((data, index) => (
                        <tr key={index} className='adad dlt'>
                            <td className='d1'>{index + 1}</td>
                            <td className='d1'>{data.name3}</td>
                            <td className='d1'><button onClick={props.bag3} className='mx-2 px-2' value={index}>-</button>{data.count3}<button value={index} onClick={props.bag4} className='mx-2 px-2'>+</button></td>

                            <td className='d1'>{data.price3}</td>
                            <td className='d1'>{data.Sprice3}</td>
                            <td className='d1'>{props.bag2(data.Sprice3, data.count3)}</td>
                            <td><button onClick={props.bag6} value={index}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>

    )
}
