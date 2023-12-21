
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("");

  function getValue(event){
    setText(event.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label for="name">Enter your name:</label><br/>
        <input type="text" onChange={getValue}/>
        <br/>
        <p>Hello {text}!</p>
    </div>
  )
}

export default App
