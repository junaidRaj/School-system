import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Input from "../Input";
import SMSelect from "../Dropdown";
import { QueryStats } from "@mui/icons-material";

function Quiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");

  // let arr = [
  //   {
  //     id: 1,
  //     display: "abc",
  //   },
  //   {
  //     id: 2,
  //     display: "abc",
  //   },
  //   {
  //     id: 3,
  //     display: "abc",
  //   },
  // ];

  let createQuiz = () => {
    setIsCreateQuiz(true);
  };
  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, {value: option}]);
  };
  let submitQuestion = ()=>{
    question.options = optionsArr.map((x)=>x.value);
    question.correctAns = optionsArr.find((x)=>x.isChecked).value;
  }
  console.log(question)

  return (
    <>
      <Box>
        <Typography variant="h4">Quiz</Typography>
        <Box>
          <Grid container>
            <Grid md={6} item>
              <Box sx={{ padding: 2 }}>
                <Input
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Name"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <Input
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Duration"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMSelect
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid md={12} item>
              <Box>
                <Button onClick={createQuiz}>Create Quiz</Button>
              </Box>
            </Grid>
          </Grid>
          {isCreateQuiz && (
            <Grid container>
              <Grid md={12} item>
                <Input
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  label="Question"
                />
              </Grid>
              <Grid md={12} item>
                {optionsArr.map((x, i) => (
                  <>
                    <Checkbox
                      onChange={(e) => (x.isChecked = e.target.value)}
                    />
                    <Typography key={i}>{x.value}</Typography>
                  </>
                ))}
              </Grid>
              <Grid md={8} item>
                <Input
                  onChange={(e) => setOption(e.target.value)}
                  label="Option"
                />
              </Grid>

              <Grid md={4} item>
                <Button onClick={addOption} >add</Button>
              </Grid>
              <Grid md={12} item>
                <Button onClick={submitQuestion} >Submit Question</Button>
                <Button>Lock Quiz</Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
}
export default Quiz;