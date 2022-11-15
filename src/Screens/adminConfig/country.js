import { Button, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getData, sendData } from '../../config/firebaseMethod';
import Input from '../Input';

export default function Country() {
  const [model,setModel] = useState({});
  let Save = () =>{
    sendData(model, 'countries')
    .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      <h1>Country</h1>
      <Container>
        <Grid container>
        <Grid sx={{padding: 1}} md={4}>
      <Input label="Country Name" 
      onChange={(e)=>setModel({...model,countryName:e.target.value})}/>
        </Grid>
        <Grid sx={{padding: 1}} md={4}>
      <Input label="Country Code" 
      onChange={(e)=>setModel({...model,countryCode:e.target.value})}/>
        </Grid>
        <Grid sx={{padding: 1}} md={4}>
      <Input label="Country Currency" 
      onChange={(e)=>setModel({...model,countryCurrency:e.target.value})}/>
        </Grid>
        <Button variant="contained" onClick={Save}>Save</Button>
        </Grid>
      </Container>
    </>
  )
}
