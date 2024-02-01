import React, { useState } from 'react'
import data from './Table2_data.json'
export const Table2 = () => {
    let aa = 0
    class D1 {
        constructor(num1) {
            this.n1 = num1
        }
        F1() {
            return this.n1
        }
    }


    const total = (a) => {
        aa = new D1(a)
        return a;
    }

    const percentage = (a) => {
        return (aa.F1()) / 5
    }

    const Grade = () => {


        if ((aa.F1() / 5) >= 40) {
            return "Pass"
        }
        else {
            return "Fail"
        }

    }
    
    const [object1, Sobject1] = useState({})
    const [Array1, SArray1] = useState(data);
    // SArray1([...Array1, data])
    const collectDtata1 = (a) => {
        Sobject1({ ...object1, name: a.target.value });
    };
    const collectDtata2 = (a) => {
        Sobject1({ ...object1, marathi: a.target.value });
    };
    const collectDtata3 = (a) => {
        Sobject1({ ...object1, hindi: a.target.value });
    };
    const collectDtata4 = (a) => {
        Sobject1({ ...object1, english: a.target.value });
    };
    const collectDtata5 = (a) => {
        Sobject1({ ...object1, math: a.target.value });
    };
    const collectDtata6 = (a) => {
        Sobject1({ ...object1, histoty: a.target.value });
    };

    const ADD = () => {
        SArray1([...Array1, object1])
    };

    
    return (
        <div>
            <div id='a'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>marathi</td>
                        <td>hindi</td>
                        <td>english</td>
                        <td>math</td>
                        <td>histoty</td>
                    </tr>
                    <tr>
                        <td><input onChange={collectDtata1}></input></td>
                        <td><input onChange={collectDtata2}></input></td>
                        <td><input onChange={collectDtata3}></input></td>
                        <td><input onChange={collectDtata4}></input></td>
                        <td><input onChange={collectDtata5}></input></td>
                        <td><input onChange={collectDtata6}></input></td>
                        <td><button onClick={ADD}>ADD</button></td>
                    </tr>
                </table>
                <hr></hr>
                <table>
                    <tr>
                        <td>Roll</td>
                        <td>Name</td>
                        <td>marathi</td>
                        <td>hindi</td>
                        <td>english</td>
                        <td>math</td>
                        <td>histoty</td>
                        <td>Total</td>
                        <td>Percentage</td>
                        <td>Grade</td>
                    </tr>
                    {Array1.map((elem, index) => (
                        <tr>
                            <td><input value={Number(index) + 1}></input></td>
                            <td><input value={elem.name}></input></td>
                            <td><input value={elem.marathi}></input></td>
                            <td><input value={elem.hindi}></input></td>
                            <td><input value={elem.english}></input></td>
                            <td><input value={elem.histoty}></input></td>
                            <td><input value={elem.math}></input></td>
                            <td><input value={total(Number(elem.marathi) + Number(elem.hindi) + Number(elem.english) + Number(elem.histoty) + Number(elem.math))}></input></td>
                            <td><input value={percentage()}></input></td>
                            <td><input value={Grade()}></input></td>
                        </tr>
                    ))}
                </table>               
            </div>
        </div>
    )
}
