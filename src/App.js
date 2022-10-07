import { CssBaseline, ThemeProvider } from "@mui/material";
import {useEffect} from "react";
import { appTheme } from "./themes/theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import Header from "./Pages/Header";
import AddData from './Pages/AddData';
import Graph from "./Pages/Graph";

import { useNavigate } from "react-router-dom";


const PrivateRoute =({children}) =>{
  const navigate = useNavigate();
  useEffect(()=>{
    if (!!localStorage.getItem('isLogin') && localStorage.getItem('isLogin') === "true") {
      
    } else {
      navigate("/")
    }
  },[])

  return <Header>{children}</Header>

}

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<PrivateRoute><AddData /></PrivateRoute>} />
      <Route path="/graph" element={<PrivateRoute><Graph /></PrivateRoute>} />
        
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
