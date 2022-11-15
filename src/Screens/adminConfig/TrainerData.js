import React, { useEffect, useState } from 'react'
import { getData } from '../../config/firebaseMethod';

export default function TrainerData() {
    const [data,setData] = useState([]);
    let list = () =>{
        getData("Trainer")
        .then((res)=>{
            console.log(res)
            setData(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        list()
    },[])
  return (
    <>
      <h1>
      TrainerData
      </h1>
      <table border={1}>
        <tr>
            <th>Assistant</th>
            <th>Fees</th>
            <th>NoOFQuiz</th>
            <th>Web</th>
            <th>courceName</th>
            <th>duration</th>
            <th>leadTrained</th>
            <th>id</th>
        </tr>
        <tbody>
            {data && data.length > 0 ? data.map( (x) => <tr>
            <td>{x.Assistant}</td>
            <td>{x.Fees}</td>
            <td>{x.NoOFQuiz}</td>
            <td>{x.Web}</td>
            <td>{x.courceName}</td>
            <td>{x.duration}</td>
            <td>{x.leadTrained}</td>
            <td>{x.id}</td>
        
        </tr>) :null}</tbody>
     </table>

    </>
  )
}
