import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Navbar from "../components/Appbar";
import { sendData } from "../config/firebaseMethod";
import SMSelect from "./Dropdown";
import Input from "./Input";
function CreateTrainer() {
  const [model, setmodel] = useState({});
  const [Qualification, SetQualification] = useState("");
  const [listofQua, SetlistofQua] = useState([]);
  console.log(listofQua)
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };

  let signin = () => {
    sendData(model, "Trainer Forms/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className=" box" >
        <Box sx={{ width: "75%", pt: 4 ,pl:12 }}>
          <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
            <Typography color="inherit" variant="h4">
              Trainer RegistrationForm
            </Typography>
            <Grid container spacing={2} sx={{ pt: 3 }}>
              <Grid item md={6}>
                <Input
                  label="FirstName"
                  required={true}
                  value={model.firstname}
                  onChange={(e) => fillmodel("firstname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                  label="LastName"
                  value={model.lastname}
                  onChange={(e) => fillmodel("lastname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Input
                  type={"number"}
                  label="Cnic Number"
                  value={model.cnicnumber}
                  onChange={(e) => fillmodel("cnicnumber", e.target.value)}
                />
              </Grid>

              <Grid item md={6}>
                <Input
                  type={"number"}
                  label="Contact Number"
                  value={model.contactnumber}
                  onChange={(e) => fillmodel("contactnumber", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <SMSelect
                  label="Course"
                  required={true}
                  value={model.course}
                  onChange={(e) => fillmodel("course", e.target.value)}
                  datasource={[
                    {
                      id: "Web And Mobile Application",
                      displayname: "Web And Mobile Application",
                    },
                    {
                      id: "Graphics Designing",
                      displayname: "Graphics Designing",
                    },
                    {
                      id: "Freelancing",
                      displayname: "Freelancing",
                    },
                    {
                      id: "Hacking",
                      displayname: "Hacking",
                    },
                    {
                      id: "Flutter",
                      displayname: "Flutter",
                    },
                    {
                      id: "Python",
                      displayname: "Python",
                    },
                  ]}
                />
              </Grid>

              <Grid item md={6}>
                <Input
                  label="Qualification"
                  value={model.qualification}
                  onChange={(e) => fillmodel("qualification", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <Box>
                  {
                    listofQua && listofQua.map((x,id)=>(
                      <Typography>Qualification:{id+1} {x}</Typography>
                    ))
                  }
                </Box>
              </Grid>

              <Grid item md={12}>
                <Button
                  color={"primary"}
                  variant={"contained"}
                  fullwidth
                  onClick={signin}
                > Register</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default CreateTrainer;
