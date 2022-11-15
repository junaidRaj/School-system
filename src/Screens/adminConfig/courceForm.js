import React, { useEffect, useState } from 'react'
import { getData } from '../../config/firebaseMethod'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/Appbar';



export default function CourceForm() {
    let [data,setData] = useState([])
   
 useEffect(()=>{
     getData("Trainer")
     .then((res)=>{
        console.log(res)
        setData(res)
     }).catch((err)=>{
       console.log(err);
     })
   },[])
 
  return ( <>
   <Navbar/>
    <h1>Course</h1>

     <div>
            {data && data.length > 0 ? data.map( (x) => 
                 <Card sx={{ minWidth: 275  , m:5 , bgcolor: 'lightblue' ,p:5 }}>
                 
                   <Typography sx={{ mb: 1.5 , ms:1 }}>
                   Cource Name | <b> {x.courceName}</b>
                   </Typography>
                   <Typography sx={{ mb: 1.5 ,  }}>
                   Duration | <b>{x.duration}</b>
                   </Typography>
                   <Typography sx={{ mb: 1.5 }}>
                   Quiz Numbers | <b>{x.NoOFQuiz}</b>
                   </Typography>
                   <Typography sx={{ mb: 1.5 }}>
                   Fees | <b>{x.Fees}</b>
                   </Typography>
                   <Typography sx={{ mb: 1.5 }}>
                   Lead Trainer | <b>{x.leadTrained}</b>
                   </Typography>
                   <Typography sx={{ mb: 1.5 }}>
                   Assistant | <b>{x.Assistant}</b>
                   </Typography>
             
                </Card>           
            ) :null}</div>
    </>
  )
}
