import React, { useState } from 'react'
import Data from './Task.json'
import Customer from './Customer.json'
import { Select } from './Component/Select'
import { Customer1 } from './Component/Customer1'
import { Product_list1 } from './Product_list1'
import { Customer_Details } from './Component/Customer_Details'
import { Print } from './Component/Print'

export const SanketSirTask = (props) => {
  const [product, Setproduct] = useState([])
  const [product_list, Setproduct_list] = useState([])
  const [AA, SetAA] = useState(0)
  const [DV, SetDV] = useState(0)
  const [QTY3, setQTY3] = useState(0)
  const [ind, Setind] = useState(0)
  const [Bill_no, setBill_no] = useState(1)


  const ADD = (q) => {
    // alert(q)
    // Setproduct_list([{...product_list,name:q.data.name}])
  }
  // const [ind, Setind] = useState(0)
  const Product_Select = (q) => {
    Setind(q.target.value)
    SetAA(Number(AA) + Number(Data[q.target.value].SalePrice))
    SetDV(Number(DV) + Number(Data[q.target.value].price))
    setQTY3(Number(QTY3) + 1)
    Setproduct_list([...product_list, {
      name3: Data[q.target.value].name,
      price3: Data[q.target.value].price,
      Sprice3: Data[q.target.value].SalePrice,
      count3: Data[q.target.value].count,
      total: (Number(Data[q.target.value].count) * Number(Data[q.target.value].SalePrice))


    }])
  }

  const [Qty, SetQty] = useState()
  const [FTotal, SetTotal] = useState()
  const [Discount, SetDiscount] = useState()
  const [Fbill, SetFbill] = useState()
  const [custmer_bill, Setcustmer_bill] = useState(0)

  const [PRO_total, SetPRO_total] = useState([])

  const Total = (a, b) => {
    // alert("rr")
    PRO_total.splice((ind), 1, ((Number(a) * Number(b))))
    Setcustmer_bill((Number(a) * Number(b)))
    
    props.bag1(AA, DV, QTY3,billno)

    return (Number(a) * Number(b))

  }


  let [Count, Setcount] = useState([55, 56])
  const Minus = (q) => {
    setQTY3(Number(QTY3) - 1)
    SetAA(Number(AA) - Number(product_list[q.target.value].Sprice3))
    SetDV(Number(DV) - Number(product_list[q.target.value].price3))
    product_list.splice(q.target.value, 1, {
      name3: product_list[q.target.value].name3,
      price3: product_list[q.target.value].price3,
      Sprice3: product_list[q.target.value].Sprice3,
      count3: (Number(product_list[q.target.value].count3) - 1),
      total: (Number(product_list[q.target.value].total) - Number(product_list[q.target.value].Sprice3))
    })
    console.log(product_list)
    // Setcount(Count-1)

  }

  const Plus = (q) => {

    // alert(Number(Number(product_list[q.target.value].count3) + 1)*Number(product_list[q.target.value].Sprice3))
    setQTY3(Number(QTY3) + 1)
    SetAA(Number(AA) + Number(product_list[q.target.value].Sprice3))
    SetDV(Number(DV) + Number(product_list[q.target.value].price3))
    // SetDV(Number(Number(product_list[q.target.value].count3) + 1)*Number(product_list[q.target.value].price3))
    product_list.splice(q.target.value, 1, {
      name3: product_list[q.target.value].name3,
      price3: product_list[q.target.value].price3,
      Sprice3: product_list[q.target.value].Sprice3,
      count3: (Number(product_list[q.target.value].count3) + 1),
      total: (Number(product_list[q.target.value].total) + Number(product_list[q.target.value].Sprice3))

    })
    // Setproduct_list(product_list)
  }



  const Delete = () => {
    // alert(product_list.length)
    Setproduct_list([])

  }
  const [History, SetHistory] = useState([])
  const [billno, setbillno] = useState(0)
  const [id2, setid2] = useState()
  const Save = (q,) => {
    setbillno(q)
    // alert(r)
  }
  const [name3,setname3]=useState()
  const getCustomername=(q)=>{
    setname3(q)


  }
  const Save1 = (r) => {
    setid2(r)
   
  }
  const print1 = (r) => {
    // setid2(r)
    console.log(r);
   
  }
  const input_search = (q) => {
    for (var i of Data) {
      if (i.name == (q.target.value)) {

        // for (var j = 0; j < (i.name.length); j++) {
        //   alert(i.name[j])
        // }


        Setproduct_list([...product_list, {
          name3: i.name,
          price3: i.price,
          Sprice3: i.SalePrice,
          count3: i.count


        }])
        SetAA(Number(AA) + Number(i.SalePrice))
        SetDV(Number(DV) + Number(i.price))
        setQTY3(Number(QTY3) + 1)


      }

    }

  }

  return (
    <div >
      <div className='row'>
        <div className='col-lg-8 left_column'>
          <h4>Produt Details</h4>
          <input placeholder='Search Product' id='input_search' onChange={input_search}></input>
          <select className='jjjj' onChange={Product_Select}>
            <option className='uyuy'>Select</option>
            {
              Data.map((data, index) => (
                <Select
                  name1={data.name}
                  price1={data.price}
                  sale_price={data.SalePrice}
                  index1={index}
                />
              ))
            }
          </select>

          <Product_list1
            bag1={product_list}
            bag2={Total}
            bag3={Minus}
            bag4={Plus}
            bag5={Count}
            bag6={Delete}

          />





        </div>
        <div className='col-lg-4 right_column'>
          <Customer_Details
            bag1={Customer}
            bag2={custmer_bill}
            bag3={AA}
            bag4={Save}
            bag5={Bill_no}
            bagg6={id2}
            bag8={getCustomername}
            bag9={Delete}
            
         

          />

        </div>



      </div>
      <div className='row'>
        <div className='col-lg-5 '>
        
          <Print
            bag1={product_list}
            bag2={props.bag2}
            bag3={props.bag3}
            bag4={props.bag4}
            bag5={billno}
            bag6={Save1}
            bag8={name3}
            bag9={print1}
          />
        </div>
      </div>
    </div>



  )
}
