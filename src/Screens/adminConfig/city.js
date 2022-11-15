import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { getData, sendData } from '../../config/firebaseMethod';
import SMSelect from '../Dropdown';
import Input from '../Input';
import SMGrid from './SmGrid';

export default function City() {
    const [model,setModel] = useState({});
    const [cityList,setCityList] = useState([]);
    let Send = () =>{
        sendData(model, 'cities')
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    let getCity = () =>{
        getData('cities')
        .then((res)=>{
            setCityList(res)
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getCity()
    },[]);
  return (
    <>
      <h1>City</h1>
      <Container>
    <Grid sx={{padding:2}} md={4} item>
        <Grid container>
      <Grid>
    <SMSelect
    label="Country"
    displayField="countryName"
    valueField="countryCode"
    nodeName="countries"
    onChange={(e)=>setModel({...model,countryCode:e.target.value})}
    />
    </Grid>
    <Grid sx={{padding:2}} md={4} item>
    <Input 
    label="City Name"
    onChange={(e)=> setModel({...model,cityName:e.target.value})}
    />
    </Grid>
    <Grid sx={{padding:2}} md={4} item>
    <Input 
    label="City Code"
    onChange={(e)=> setModel({...model,cityCode:e.target.value})}
    />
    </Grid>
    </Grid>
    <Button onClick={Send} variant="contained">Send</Button>
    </Grid>
      </Container>
    <Container>
    <SMGrid
      datasource={cityList}
      Cols={[
        {
            key: "id",
            displayName: "Id",
        },
        {
            key: "cityName",
            displayName: "City Name",
        },
        {
            key: "cityCode",
            displayName: "City Code",
        },
        {
            key: "countryCode",
            displayName: "Country Code",
        },
      ]}
      />
      </Container>

    </>
  )
}
