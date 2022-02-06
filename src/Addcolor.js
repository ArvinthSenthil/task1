import { useState } from 'react';
export function AddColor() {


    const [color, setColor] = useState("");
    const styles = { backgroundColor: color };
  
    const [colors, setColors] = useState(["orange", "yellow", "pink"]);
  
  
    return (
      <div  >
        <input style={styles} onChange={(e) => { setColor(e.target.value); }} placeholder="Enter a color" />
  
        <button onClick={() => setColors([...colors, color])}>  Add color  </button>
  
        <div className="ColorBox">
        {colors.map((x) => (<ColorBox y={x} />))}
        </div>
        
  
      </div>
    );
  }
  function ColorBox({ y }) {
  
    const styles = {
      backgroundColor: y,
      height: "50px",
      width: "200px",
      margin: "10px",
    };
  
    return (
  
      <div className="ColorBox" >
        <div style={styles}>  </div>
  
      </div>
      
  
    );
  }