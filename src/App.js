import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [range,setRange] = useState("")
  const [number, setNumber] = useState("")
  const [character, setCharacter] = useState("")
  var x = "abcdefghijklmnopqrstuvwx"+character+"yzABCDEFGHIJKLMNOPQRSTUVWXYZ"+number
  //  const a = Math.floor(Math.random()*x.length)
  const hello = useEffect(() => {
    let s = ""
    for (let i = 0; i < Number(range); i++) {
      s = s + x[Math.floor(Math.random() * x.length)]
    }
    setInput(s)
  }, [range])
 
  return (
    <div className="App">
      <header className="App-header">

        <div style={{ backgroundColor: "#282c34", border: "2px solid black", width: "100vh", height: "20vh", borderRadius: "1vh" }}>

          <div style={{ display: "flex", gap: "5vh" }}>

            <input value={input} style={{ marginLeft: "3vh", width: "70vh", height: "5vh", marginTop: "3vh", fontSize: "3vh" }}></input>

            <button onClick={()=>{navigator.clipboard.writeText(input)}} style={{ border: "3px solid black", cursor: "pointer", backgroundColor: "hsl(77, 100%, 50%)", marginRight: "-30vh", width: "15vh", height: "5.5vh", marginTop: "3vh", fontSize: "3vh" }}>Copy</button>

          </div>
          <div style={{ display: "flex", gap: "13vh", marginTop: "3vh", marginLeft: "3vh" }}>

            <lebal>Length  <input max="25" onChange={(e) => { setRange(e.target.value) }} style={{ width: "18vh", cursor: "pointer", height: "3vh", accentColor: "hsl(77, 100%, 50%)" }} type="range"></input></lebal>

            <lebal>Numbers  <input onClick={()=>{
              if(number==""){
                  setNumber("0123456789")
              }else{
                setNumber("")
              }
            }} style={{ width: "5vh", cursor: "pointer", accentColor: "hsl(77, 100%, 50%)", height: "2.5vh" }} type="checkbox"></input></lebal>

            <lebal>Character  <input onClick={()=>{
              if(character==""){
                  setCharacter( "!#$%&'()*+,-./:;<=>?@ []^_`{|}~")
              }else{
                setCharacter("")
              }}} style={{ width: "5vh", cursor: "pointer", accentColor: "hsl(77, 100%, 50%)", height: "2.5vh" }} type="checkbox"></input></lebal>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
