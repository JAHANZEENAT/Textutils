
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white'
    }
 
  }
  return (
    <>
    <Navbar title="TextUtil" aboutUs="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform heading="Enter text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
