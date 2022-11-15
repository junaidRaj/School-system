import { Box, TextField,Button } from '@mui/material';
import React, { useState } from 'react'
import { signUpUser } from '../config/firebaseMethod';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  let navigate = useNavigate();
  let signUp = () =>{
    setLoader(true);
    signUpUser({email,password,
      userName: "junaid",
      contact: "0312548754",
    })
    .then((Succes) => {
      setLoader(false);
      navigate('/Login')
      console.log(Succes)
    })
    .catch((error) => {
      setLoader(false);
    console.log(error)
    });
  }
  return (
    <>
    <h1>Sign Up</h1>
    <Box>

    <Box>
    <TextField 
    label="Email"
    onChange={(e) => setEmail(e.target.value)}
    variant="standard"
    />
    </Box>
    <Box>
    <TextField 
    type="password"
    label="Password"
    onChange={(e) => setPassword(e.target.value)}
    variant="standard"
    />
    </Box>
    </Box>
    <Button variant='contained' disabled={isLoading} onClick={signUp}>{isLoading?<CircularProgress color="inherit" />: "Sign Up" }</Button>
    </>
  )
}
