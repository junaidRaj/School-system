import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../config/firebaseMethod';
import QuizPage from './Quiz';

 const StudentsList = () => {
    let [data,setData] = useState([])
    let navigate = useNavigate()
   
    let give = () =>{
      getData("Forms")
      .then((res)=>{
         console.log(res)
         setData(res)
      }).catch((err)=>{
        console.log(err);
      })
    }
     useEffect(()=>{
      give()
   },[])
   let startQuiz = ()=>{
       navigate('/QuizPage')
   }
  return ( <>
    <h1>Students</h1>
     <table border={1}>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Cnic</th>
            <th>Course</th>
            <th>Section</th>
            <th>FatherName</th>
            <th>FatherContact</th>
            <th>EmergencyContact</th>
            <th>Date</th>
        </tr>
        <tbody>
            {data && data.length > 0 ? data.map( (x) => <tr>
            <td>{x.firstName}</td>
            <td>{x.lastName}</td>
            <td>{x.CNIC}</td>
            <td>{x.course}</td>
            <td>{x.Section}</td>
            <td>{x.FatherName}</td>
            <td>{x.FatherContact}</td>
            <td>{x.EmergencyContact}</td>
            <td>{x.Date}</td>
        
        </tr>) :null}</tbody>
     </table>
     <button onClick={startQuiz}>Start Quiz</button>
     </>
  )
}

export default StudentsList;

