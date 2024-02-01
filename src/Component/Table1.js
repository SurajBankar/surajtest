import React, { useState } from 'react'
import Mydata1 from './Mydata.json'
export const Table1 = () => {
    const [total1, Settotal1] = useState(0)

    const d1 = (a) => {

        return a
    }
    const d2 = (a) => {

        return (a / 5)
    }
    
    const d3 = (a) => {
        var grade = null 
        if ((a / 5) >= 60) {
            grade = "pass"
        }
        else {
            grade = "Fail"
        }
        return grade


    }
    // for (var i of Mydata1) {

    //     for (var j in i) {

    //     }

    // }
    //    Mydata1[0]=(...Mydata1,{grade:"aaa"})
    //    console.log(Mydata1)

    const [sr, setsr] = useState()
    const [name, setname] = useState()
    const [marathi, setmarathi] = useState()
    const [hindi, sethindi] = useState()
    const [english, setenglish] = useState()
    const [history, sethistory] = useState()
    const [math, setmath] = useState()
    const [total, settotal] = useState()
    const [Percentage, setPercentage] = useState()
    const [grade, setgrade] = useState()

    const [object1, setobject1] = useState([])
    const sr1 = (q) => {
        setsr(q.target.value)
        setobject1({ ...object1, sr: q.target.value })
    }
    const name1 = (q) => {
        setname(q.target.value)
        setobject1({ ...object1, name: q.target.value })
    }
    const marathi1 = (q) => {
        setmarathi(q.target.value)
        setobject1({ ...object1, marathi: q.target.value })
    }
    const hindi1 = (q) => {
        sethindi(q.target.value)
        setobject1({ ...object1, hindi: q.target.value })
    }
    const english1 = (q) => {
        setenglish(q.target.value)
        setobject1({ ...object1, english: q.target.value })
    }
    const history1 = (q) => {
        sethistory(q.target.value)
        setobject1({ ...object1, history: q.target.value })
    }
    const math1 = (q) => {
        setmath(q.target.value)
        setobject1({ ...object1, math: q.target.value })
    }

    const [Array1, setarray1] = useState([])//myadata1


    const ADD = () => {
        alert("aa")

        setarray1([...Array1, object1])
    }

    const ADD1 = () => {
        setarray1(Mydata1)
    }

    console.log(Array1)

    return (


        <div>
            <table>
                <tr>
                    <th>sr.no</th>
                    <th>name</th>
                    <th>marathi</th>
                    <th>hindi</th>
                    <th>English</th>
                    <th>History</th>
                    <th>Math</th>

                </tr>
                <tr id='qqq'>
                    <td><input onChange={sr1}></input></td>
                    <td><input onChange={name1}></input></td>
                    <td><input onChange={marathi1}></input></td>
                    <td><input onChange={hindi1}></input></td>
                    <td><input onChange={english1}></input></td>
                    <td><input onChange={history1}></input></td>
                    <td><input onChange={math1}></input></td>
                    <td><button onClick={ADD}>ADD</button></td>
                    <td><button onClick={ADD1}>ADD1</button></td>

                </tr>

            </table>
            <hr></hr>
            <table>
                <tr className='a'>
                    <th>Sr.no</th>
                    <th>Name</th>
                    <th>Marathi</th>
                    <th>Hindi</th>
                    <th>English</th>
                    <th>History</th>
                    <th>Math</th>
                    <th>Total</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>

                {
                    Array1.map((data, index) => (


                        <tr key={index} className='b'>
                            <td>{data.sr}</td>
                            <td>{data.name}</td>
                            <td>{data.marathi}</td>
                            <td>{data.hindi}</td>
                            <td>{data.english}</td>
                            <td>{data.history}</td>
                            <td>{data.math}</td>
                            <td>{d1((Number(data.marathi) + Number(data.math) + Number(data.hindi) + Number(data.english) + Number(data.history)))}</td>
                            <td>{d2((Number(data.marathi) + Number(data.math) + Number(data.hindi) + Number(data.english) + Number(data.history)))}</td>
                            <td>{d3((Number(data.marathi) + Number(data.math) + Number(data.hindi) + Number(data.english) + Number(data.history)))}</td>

                            <td></td>


                        </tr>

                    ))
                }



            </table>



        </div>
    )
}
