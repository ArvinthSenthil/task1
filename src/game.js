
import { useState } from "react";
import Button from '@mui/material/Button';


export function TicTacToe() {
  
  const [board,setBoard]= useState ([null,null,null,null,null,null,null,null,null]);

  const decidewinner =(board) => {
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(board[a]!== null && board[a]===board[b] && board[b]===board[c]) {
       
        return board[a]
      }
    
     
    }
    return null;
  }
 const winner= decidewinner(board);
 const draw =(board) => {
   if (!board.includes(null)&&winner===null){
     return "draw"
   }
 }
 const drawn=draw(board);




  const[isxturn,setisxturn] = useState(true);

  const handleclick=(index)=>{
    if(winner === null && board[index]===null){ const boardcopy = [...board]
      boardcopy[index]=isxturn ? "x" : "o";
      setBoard(boardcopy)
      setisxturn(!isxturn)}
 
  }
 const btnstyle={
  display:board[0]!==null ? "none" :"block"
 }


    return(
      <div className="full-game">
        <div className="topic">
          <h1>TicTacToe</h1>
        </div>
        <div style={btnstyle}>
      <button onClick={()=>setisxturn(true)}>Player X </button>
      <button onClick={()=>setisxturn(false)}>Player O</button>
    </div> 
       
    
       <span className={winner||drawn?"playerturnhide" :"playerturnshow"}>{isxturn ? <h2>X turn</h2> : <h2>o turn</h2>}</span>  
    <div className="board">
  {board.map((val,index)=>(<Gamebox val={val} onplayerclick={()=>handleclick(index)}/>))}
  
        </div>
       
       {winner ? <h2>winner is :{winner}</h2> : ""}
      
       {drawn ? <h2>match:{drawn}</h2> : ""}
       
      
       <Button  variant="contained" onClick={()=>setBoard([null,null,null,null,null,null,null,null,null])} >Reset</Button>
        </div>   
    )
  
  }



  function Gamebox({val,onplayerclick}){
    
   
    const styles ={
      color:val==="x"?"green" : "red",
    }
    return(
    <div
    onClick={()=>onplayerclick()}
     
      style={styles} className="game-box">{val}
       
      </div>
      
    )
  }

  

  
  