
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
/*
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

*/
function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert =(message, type) =>{
      setAlert({
        msg : message,
        type: type //can use same name 
      })
      setTimeout(() =>{
          setAlert(null);
      },1000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
    {/*<Router>*/}
    <Navbar title="textutile" aboutText='About' mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
      {/*<Routes>
          <Route path="/about" exact element={<About  mode={mode}/>}/> 
          <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}></TextForm>}/>
  </Routes>*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    {/*</Router>*/}
    
    </>
  );
}

export default App;
