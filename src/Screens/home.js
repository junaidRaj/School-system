import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkUser, getData, sendData } from "../config/firebaseMethod";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MaterialUIPickers from './date';
import SMSelect from "./Dropdown";
import Input from "./Input";
import ResponsiveDrawer from "./drawer";
import StudentsList from "./Students";

export default function Home() {
  const navigate = useNavigate();
  const [txt, setTxt] = useState("");
  const [userId, setUserId] = useState("");
  const params = useParams();
  

  useEffect(() => {
    checkUser()
      .then((res) => {
        console.log(res);
        if (params.id == res) {
          setUserId(res);
          // getTodoData();
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("No data");
      });
  }, []);

 return(
  <>
   <ResponsiveDrawer/>
  </>
 )
}
