import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import CourceForm from "../Screens/adminConfig/courceForm";
import CreateResult from "../Screens/adminConfig/createResul";
import Trainer from "../Screens/adminConfig/Trainer";
import CreateTrainer from "../Screens/createTrian";
import Home from "../Screens/home";
import Login from "../Screens/login";
import  QuizPage  from "../Screens/Quiz";
import Registration from "../Screens/registration";
import Result from "../Screens/result";
import SignUp from "../Screens/signup";
import StudentsList from "../Screens/Students";

function AppRouter(){
    return<>
    <Router>
        <Routes>
            <Route path="/:id/*" element={<Home/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="/courceForm" element={<CourceForm />} />  
            <Route path="/" element={<Registration/>}/>
            <Route path="QuizPage" element={<QuizPage/>}/>
            <Route path="trainer" element={<Trainer/>}/>
            <Route path="createTrainer" element={<CreateTrainer/>}/>
            <Route path="result" element={<Result/>}/>
            
        </Routes>
    </Router>
    </>
}
export default AppRouter;