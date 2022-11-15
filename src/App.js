import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import Home from './Screens/home';
import ResponsiveDrawer from './Screens/drawer';

function App() {
  return (
    <div className="App">
     <AppRouter/>
    </div>
  );
}

export default App;
