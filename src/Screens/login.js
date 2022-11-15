import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { loginUser } from "../config/firebaseMethod";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading, setLoader] = useState(false);
    let navigate = useNavigate();
    let login = () =>{
        setLoader(true)
        loginUser({
            email,
            password
        })
        .then((sucess)=>{
            setLoader(false)
            navigate(`/${sucess.id}`)
            console.log(sucess)
        })
        .catch((err)=>{
            setLoader(false)
            console.log(err)
        })
    }
    return(<>
    <h1>Login</h1>
    <Box>
        <Box>
            <TextField label="email" variant="standard" 
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Box>
        <Box>
            <TextField label="password" type="password" variant="standard" 
            onChange={(e)=>setPassword(e.target.value)}
            />
        </Box>
        <Box>
            <Button onClick={login} variant="filled">{isLoading ? <CircularProgress color="inherit" /> :"Login" }</Button>
        </Box>
    </Box>
    </>);
}
export default Login;