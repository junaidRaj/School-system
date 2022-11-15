import React, { useEffect } from 'react';
import Input from './Input';
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { sendData } from '../config/firebaseMethod';
import SMSelect from './Dropdown';
import { setDate } from './date';
import Navbar from '../components/Appbar';

export default function Registration() {
 
    const [model, setmodel] = useState({});
    let fillModel = (key, val) => {
      model[key] = val;
      setmodel({ ...model });
    };

    let addTodo = () => {
        model.registrationDate = setDate(new Date());
        model.isFeeSubmited = false;
        model.isApproved = false;
        model.isActive = false;
      };
      sendData(model, "Forms")
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
 
    
    return (
        <>
         <Navbar/>
        <Box sx={{width:"100%",height:"200%"}}>
        <Container>
          <h1>Registration</h1>
        <Box  sx={{ padding: 2, border: "2px solid black", width: "90%",height:"80vh", ml:5, borderRadius: "50px"      }}>
            <Grid container spacing={1} sx={{p:3}}>
              <Grid item md={6}>
                <Input
                required={true}
                  label="First Name"
                  value={model.firstName}
                  onChange={(e) => fillModel("firstName", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="last Name"
                  value={model.lastName}
                  onChange={(e) => fillModel("lastName", e.target.value)}
                />
              </Grid>
              <Grid item md={12}>
                <SMSelect
                //  nodename="course"
                //  displayField="courceName"
                //  valueField="courceName"
                //   label="Course"
                  required={true}
                  value={model.course}
                  onChange={(e) => fillModel("course", e.target.value)}
                  datasource={[
                    {
                      id: "wm",
                      displayname: "Web And Mobile",
                    },
                    {
                      id: "gd",
                      displayname: "graphic Design",
                    },
                    {
                      id: "fl",
                      displayname: "Flutter",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={12}>
                <SMSelect
                required={true}
                  label="Section"
                  onChange={(e) => fillModel("Section", e.target.value)}
                  datasource={[
                    {
                      id: "a",
                      displayname: "A",
                    },
                    {
                      id: "b",
                      displayname: "B",
                    },
                    {
                      id: "c",
                      displayname: "C",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="Contact"
                  value={model.Contact}
                  onChange={(e) => fillModel("Contact", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="CNIC"
                  value={model.CNIC}
                  onChange={(e) => fillModel("CNIC", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="Father Name"
                  value={model.FatherName}
                  onChange={(e) => fillModel("FatherName", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="Father CNIC"
                  value={model.FatherCNIC}
                  onChange={(e) => fillModel("FatherCNIC", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="Father Contact"
                  value={model.FatherContact}
                  onChange={(e) => fillModel("FatherContact", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                required={true}
                  label="Emergency Contact"
                  value={model.EmergencyContact}
                  onChange={(e) => fillModel("EmergencyContact", e.target.value)}
                />
              </Grid>
              <Grid item md={6} sx={{ml:"180px"}}>
                <Input type='date'
                required={true}
                 value={model.Date}
                 onChange={(e) => fillModel("Date", e.target.value)}
                />
              </Grid>
            </Grid>
          <Button variant="contained" onClick={addTodo} sx={{mt:3}}>
           Submit
          </Button>
          </Box>
        </Container>
        </Box>
          <br/>
        </>
      );
}


