import React from 'react'

export const Foot = (props) => {
  const Show_History=()=>{
alert("ww")
  }
  return (
    <div className='row' id='foot' >
    <div className='col-lg-2 bg-success '><a className='text-dark' onClick={Show_History}> <h2>History</h2></a>
   </div>
    <div className='col-lg-1 bg-warning '> <h2 className='my-auto'>Qty={props.T4}</h2></div>
    <div className='col-lg-3 bg-primary'><h2 >Total MRP={props.T2}</h2></div>
    <div className='col-lg-3 bg-info'>  <h2 >Total Discount={props.T3}</h2></div>
    <div className='col-lg-3 bg-success'><h2 >Total Bill={props.T1}</h2></div>
  </div>
  )
}
