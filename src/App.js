import React, { useEffect, useState,createRef,useRef } from "react"
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [range,setRange] = useState("")
  const [number, setNumber] = useState("")
  const [pop_up,setPop_up] = useState(false)
  const [character, setCharacter] = useState("")
  var x = "abcdefghijklmnopqrstuvwx"+character+"yzABCDEFGHIJKLMNOPQRSTUVWXYZ"+number
  //  const a = Math.floor(Math.random()*x.length)
  let ref = useRef(null)
  // let ref = createRef()
  const hello = useEffect(() => {
    let s = ""
    for (let i = 0; i < Number(range); i++) {
      s = s + x[Math.floor(Math.random() * x.length)]
    }
    setInput(s)
  }, [range])
  function copy(){
    console.log('heloo')
    navigator.clipboard.writeText(input)
    setPop_up(true)
    setTimeout(()=>{
      setPop_up(false)
    },2000)
  }
 
  return (
    <div className="App">
      <header className="App-header">

        <div style={{position:'relative' , backgroundColor: "#282c34", border: "2px solid black", width: "100vh", height: "20vh", borderRadius: "1vh" }}>

          <div style={{ display: "flex", gap: "5vh" }}>

            <input value={input} onChange={(e)=>setInput(e.target.value)} ref={ref} style={{ marginLeft: "3vh", width: "70vh", height: "5vh", marginTop: "3vh", fontSize: "3vh" }}></input>

            <button onClick={()=>copy()} onMouseEnter={()=> ref.current.select()} style={{ border: "3px solid black", cursor: "pointer", backgroundColor: "hsl(77, 100%, 50%)", marginRight: "-30vh", width: "15vh", height: "5.5vh", marginTop: "3vh", fontSize: "3vh" }}>Copy</button>

          </div>
          <div style={{ display: "flex", gap: "13vh", marginTop: "3vh", marginLeft: "3vh" }}>

            <label>Length  <input max="25" onChange={(e) => { setRange(e.target.value) }} style={{ width: "18vh", cursor: "pointer", height: "3vh", accentColor: "hsl(77, 100%, 50%)" }} type="range"></input></label>
            
            <label>Numbers  <input onClick={()=>{
              if(number==""){
                  setNumber("0123456789")
              }else{
                setNumber("")
              }
            }} style={{ width: "5vh", cursor: "pointer", accentColor: "hsl(77, 100%, 50%)", height: "2.5vh" }} type="checkbox"></input></label>

            <label>Character  <input onClick={()=>{
              if(character==""){
                  setCharacter( "!#$%&'()*+,-./:;<=>?@ []^_`{|}~")
              }else{
                setCharacter("")
              }}} style={{ width: "5vh", cursor: "pointer", accentColor: "hsl(77, 100%, 50%)", height: "2.5vh" }} type="checkbox"></input></label>
          </div>

      {pop_up && (
        <div style={{position : 'absolute', top:'30%',left:'35%',borderRadius:'10px',padding:'5px' ,backgroundColor: "#282c34", border:'2px solid hsl(77, 100%, 50%)', zIndex:'50'}} >
          <p >Copied to clipBoard</p>
        </div>
      )}
        </div>
        
      </header>
    </div>
  );
}

export default App;
