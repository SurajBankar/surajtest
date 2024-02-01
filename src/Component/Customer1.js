import React from 'react'
const Send_data=()=>{
    
}
export const Customer1 = (props) => {
    return (
        <option onClick={Send_data()} value={props.index2}>{props.name2}</option>
    )
}
