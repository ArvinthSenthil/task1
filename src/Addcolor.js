import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export function AddColor() {


    const [color, setColor] = useState("");
    
  
    const [colors, setColors] = useState(["orange", "yellow", "pink"]);
  
  
    return (
      <div className='Addcolor'>
       
        <TextField id="outlined-basic" placeholder="Enter a color" variant="outlined"  onChange={(e) => { setColor(e.target.value); }} />
    
        <Button variant="contained"  onClick={() => setColors([...colors, color])}>Add color</Button>
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