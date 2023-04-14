import React,{useState} from 'react'



export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","Success");
  }
  const handleLoClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase","Success");
  }
  const handleOnChange = (event)=>{
    //console.log("on Change");
    setText(event.target.value);
    
  }
  const[text,setText] = useState('');
  //setText("new text");
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra spaces","Success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  return (
    <>
    <div className = "container"style ={{backgroundColor: props.mode === 'dark' ? 'grey' :'white'}}> 
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} style ={{backgroundColor: props.mode === 'dark' ? '#a9a4a8' :'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleUpClick}> convert to Uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleLoClick}> convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}> Remove Extra Spaces </button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    </div>
    <div className = "container my-3 "style ={{backgroundColor: props.mode === 'dark' ? 'grey' :'white'}}>
        <h2>your text summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
    
  )
}
