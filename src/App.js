import "./App.css";
import { Switch, Route,Redirect} from "react-router-dom";
import{TicTacToe} from "./game";
import { useState } from "react";
import { MovieList } from "./MovieList";
import{AddColor} from "./Addcolor.js"
import { Notfound } from "./Notfound";
import {Addmovie} from "./Addmovie"
import{Editmovie} from "./editmovie"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';



import { Moviedetails } from "./Moviedetails";




export default function App() {
 
   
 
  
  const history=useHistory();
  const[mode,setMode]=useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  }); 
 

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper style={{borderRadius:"0px", minHeight:"100vh"}} elevation={3} >

 
    <div className="App">

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Tooltip title="Home">
          <Typography className="Myapp" onClick={()=>history.push("/")} variant="h6" component="div">
            My App
          </Typography>
          </Tooltip>
   
          <Button style={{ marginLeft:"auto" }} onClick={()=>history.push("/movies")} color="inherit">Movies</Button>
          <Button onClick={()=>history.push("/movies/add")} color="inherit">Add Movies</Button>
          <Button onClick={()=>history.push("/game")} color="inherit">Tic Tac Toe</Button>
          <Button onClick={()=>history.push("/colorgame")} color="inherit">Color Game</Button>
          <Tooltip title= {mode==="light" ? "dark mode" : "light mode"}>
          <Button  startIcon= {mode=== "dark" ? <Brightness7Icon /> : <Brightness4Icon />}  onClick={()=>setMode(mode==="light" ? "dark" : "light")} style={{ marginLeft:"10px" }} color="inherit"></Button>
          </Tooltip>
        </Toolbar>
      </AppBar> 
    </Box>
    


      <Switch>
      <Route exact path="/movies/add">
        <Addmovie ></Addmovie>
          </Route>
      <Route exact path="/movies/:id">
         <Moviedetails />
        
        </Route>
        <Route exact path="/films">
          <Redirect to="/movies"></Redirect>
        </Route>
        <Route exact path="/movies/edit/:id">
          <Editmovie />
        </Route>
       
       
       
        <Route exact path="/movies">
       
      <MovieList  ></MovieList>
        </Route>

        <Route path="/colorgame">
         <AddColor />
        </Route>
        

        <Route path="/game">
          <TicTacToe/>
        </Route>

        <Route exact path="/">
          <Home />
         
         
        </Route>


       <Route path="**">
       <Notfound /> 
       </Route>
             
        </Switch>
    </div>
    </ Paper>
    </ThemeProvider>
  );
}
 function Home() {
  return (
    <div className="home">
      <h1>Welcome to my app😊❤</h1>
      {/* <TableComp /> */}
    </div>
  );
}


