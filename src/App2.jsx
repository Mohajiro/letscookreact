import { useState } from "react";
 
import reactLogo from "./assets/react.svg";
 
import viteLogo from "/vite.svg";
 
import "./App.css";
 
function App() {
  const [count, setCount] = useState(0);
  const name = "Toto";
 
  const score = [<a href="#">LIEN</a>, "2", "3"];
 
  const person = {
    name: "Lili",
    age: 20
  }
 
  const isMajor = true;
 
  const isDark = true;
 
 
  return (
    // <main style={isDark ? {background: "black", color: "white"} : {background: "white", color: "black"}}>
 
    //   <h1>Hello {name}</h1>
    //   <div className="container mx-auto">Lorem ipsum {score}</div>
    //   <div>I'm {person.name}</div>
    //   {/*  */}
    //   <div>Majorité : {isMajor ? "Oui" :"Non"}</div>
 
    // </main>

    
  );
}
 
export default App;