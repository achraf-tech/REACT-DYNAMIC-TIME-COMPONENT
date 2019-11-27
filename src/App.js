import React from "react";
import "./App.css";
let t = 100515515;
let h = parseInt(t / 3600000);
let m = parseInt((t % 3600000) / 60000);
let s = parseInt(((t % 3600000) % 60000) / 1000);
 




function App() {
  return (
    <div className="App">
      <h1>{h.toString().padStart(2, 0) + ":" + m.toString().padStart(2, 0) + ":" + s.toString().padStart(2, 0)}</h1>
    </div>
  );
}

export default App;
