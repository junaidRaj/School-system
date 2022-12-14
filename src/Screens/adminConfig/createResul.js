import { Box, Button, Grid, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import SMSelect from "../Dropdown";
import { getData, sendData } from "../../config/firebaseMethod";
import Navbar from "../../components/Appbar";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC100",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC101",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC102",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC103",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC104",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC105",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC106",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC107",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC108",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC109",
      result: "Pass",
    },
  ]);
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  let submitForm = () => {
    setLoader(true);
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "results")
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
      <h1>Create Result</h1>
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <Switch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <SMSelect
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphics Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr key={i}>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <Button loading={loader}  onClick={submitForm} variant='contained'>Submit </Button>
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <SMSelect
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    datasource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />
                </td>
                <td>
                  <Switch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </>
  );
}
export default CreateResult;
