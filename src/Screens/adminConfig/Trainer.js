import { SmartButton } from '@mui/icons-material';
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getData, sendData } from '../../config/firebaseMethod';
import Input from '../Input'

export default function Trainer() {
    const [model, setModel] = useState({});
    const [item,setItem] = useState([]);
    let fillModel = (key,val)=>{
    model[key] = val;
    setModel({...model})
    };
     
        const trainerData = () => {
            sendData(model, `course`)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          };
     

      useEffect(()=>{
          getData("course")
            .then((res) => {
              console.log(res);
              setItem(res)
            })
            .catch((err) => {
              console.log(err);
            });
        },[])


    
  return (
    <>

    <Box sx={{padding:2,backgroundColor:"blueviolet"}}>
    <Grid container spacing={2} sx={{margin: "0 Auto"}} width={300}>
    <Grid item md={8}>
        <Input label='CourceName'
        value={model.courceName}
        onChange={(e) =>fillModel("courceName",e.target.value)}
        />
    </Grid> 
    <Grid item md={8}>
        <Input label='duration'
        value={model.duration}
        onChange={(e) =>fillModel("duration",e.target.value)}
        />
    </Grid> 
    <Grid item md={8}>
        <Input label='No of Quiz'
        value={model.NoOFQuiz}
        onChange={(e) =>fillModel("NoOFQuiz",e.target.value)}
        />
    </Grid> 
    <Grid item md={8}>
        <Input label='Fees'
        value={model.Fees}
        onChange={(e) =>fillModel("Fees",e.target.value)}
        />
    </Grid> 
    <Grid item md={8}>
        <Input label='leadTrained'
        value={model.leadTrained}
        onChange={(e) =>fillModel("leadTrained",e.target.value)}
        />
    </Grid> 
    <Grid item md={8}>
        <Input label='Assistant'
        value={model.Assistant}
        onChange={(e) =>fillModel("Assistant",e.target.value)}
        />
    </Grid> 
    </Grid>
      <Button onClick={trainerData} variant='contained'>Submit</Button>
    </Box>
    </>
  )
}
