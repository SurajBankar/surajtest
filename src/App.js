import React, { useState } from 'react'
// import { Table1 } from './Component/Table1'
import './Style.css'
import Data from './Task.json'
import { SanketSirTask } from './SanketSirTask'
import { Foot } from './Component/Foot'


export const App = () => {
  const [Qty, SetQty] = useState()
  const [FTotal, SetTotal] = useState()//70
  const [Discount, SetDiscount] = useState()
  const [Fbill, SetFbill] = useState()
  const [dbill, Setdbill] = useState()
  const [DDD, SetDDD] = useState()
  const [qty4, Setqty4] = useState()
  const [H5, SetH5] = useState()
  const [bn,setbn]=useState()

  function VVVV(e,f,h,k) {
    SetTotal(e)
    Setdbill(f)
    Setqty4(h)
    setbn(k)
   

    // alert(Number(f)-Number(f))
    SetDDD(Number(f)-Number(e))
  }
var b=10;
console.log(b)

  return (
    <div>

      <SanketSirTask
        bag1={VVVV}
        bag2={qty4}
 
        bag3={FTotal}
        bag4={DDD}
      />

      <Foot
        T1={FTotal}
        T2={dbill}
        T3={DDD}
        T4={qty4}
        T5={H5}
      />
    </div>
  )
}
