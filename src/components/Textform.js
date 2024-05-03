
import React,{useState} from 'react'
export default function Textform(props) {
  
    const handleUpCase = ()=>{
        let upperCase=text.toUpperCase()
        setText(upperCase)
    }
    const handleLowCase = ()=>{
        let lowerCase=text.toLowerCase()
        setText(lowerCase)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
   const handleClearText = ()=>{
    setText('')
   }
   const handleCopyText=()=>{
    let text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
  
   }
   const handleExtraSpace=()=>{
    let temp = text.split(/[ ]+/)
    setText(temp.join(' '))
   }

    const[text,setText] =useState('');
  return (
    <div className='container' style={{color : props.mode==='dark'?'white' :'#042743'}}>
        <h1 align="center">{props.heading}</h1>
    <div className="container mb-3">
    <textarea className="form-control" 
     rows="8" id="mybox" value={text}
     style={{backgroundColor : props.mode==='dark'?'grey' : 'white',
     color : props.mode==='dark'?'white' : '#042743'}} onChange={handleOnChange}></textarea></div>

  <div className='mt-2'>
    <button className='btn btn-primary mx-2' onClick={handleUpCase}
    >Convert To UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleLowCase}
    >Convert To LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearText}
    >Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopyText}
    >Copy Text</button>
     <button className='btn btn-primary mx-2' onClick={handleExtraSpace}
    >Remove Extra Space</button>
  </div>
  <div className="container my-5" style={{color : props.mode==='dark'?'white' : '#042743'}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(' ').length} Words and {text.length} Characters</p>
    <p>{0.008*text.split(' ').length} Minutes to read </p>
    <h4>Preview</h4>
    <p>{text}</p>
  </div>
    </div>

  )
}
