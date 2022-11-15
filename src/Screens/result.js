import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from '../components/Appbar'
import { getData } from '../config/firebaseMethod';
import SMGrid from './adminConfig/SmGrid';
import SMSelect from './Dropdown';
import Input from './Input';

export default function Result() {
    const [data,setData] = useState([]);
    const [result,setResult] = useState([])
    let resultData = () => {
        getData("results")
          .then((res) => {
            console.log(res);
            setResult(res)
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    
    useEffect(()=>{
        resultData()
    },[])


    const [model,setModel] = useState({});
  return (
      <>
      <Navbar/>
      <h1>Result</h1>
    <Container>
    <Box>
        <Box>
        <Grid container>
        <Grid item md={6}>
           <SMSelect
           label="course Name"
           valueField="id"
           displayField="cource"
           nodeName="result"
           datasource={data}
           onChange={(e)=>setModel({...model,course:e.target.value})}
           />
        </Grid>   
        <Grid item md={6} sx={{p:1}}>
           <Input
           label="roll No"
           onChange={(e)=>setModel({...model,rollNo:e.target.value})}
           />
        </Grid>   
        </Grid> 
        </Box>
      </Box>
      <Box>
      <SMGrid
      datasource={result}
      Cols={[
        {
            key: "model",
            displayName: "Result",
        },
      ]}
      />
            </Box>
    </Container>
    </>
  )
}
