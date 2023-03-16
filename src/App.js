import React,{useState} from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';

function App() {
  const [currentForm,setCurrentForm] = useState("login");
  
  const toggleForm = (forName)=>{
    setCurrentForm(forName);
  };
  return (
    <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Registration onFormSwitch={toggleForm}/>
        } 
    </div>
  );
}

export default App;
