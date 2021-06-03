import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {provider , auth} from '../firebase/config'
import {useHistory} from 'react-router-dom'
import styled from "styled-components"



import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login({user , setUser}) {
  // {user , setUser}

  // const [ user , setUser ] = useState({ email:'prakharsharma22@gmail.com' , displayName:'Prakhar Sharma'})

    console.log(user)
    const handleLogin = () => {
        if(!user) {
          auth.signInWithPopup(provider).then((result) => {
            setUser(result.user)
            // console.log(result.user)
          })
        }
      }



  return (
      <Router>

      { user ? <Route path="/">
          <Dashboard user={user} setUser={setUser}/>
          
      </Route>  : 
        <Wrapper>
        <Route path="/">
          <Contain><span>Welcome, To Your Own Gallery</span></Contain>
          <SPC>Hope you have a good experience</SPC><br/>
        <Button size="large" variant="outlined" color="secondary"  onClick={handleLogin}  >
          Login
          </Button>
          
        
      </Route> 
      </Wrapper>
      }

      </Router>
    
  );
}

export default Login;

const Wrapper = styled.div`
background-color: #0a1931;
height: 100vh;
width: 100vw;
margin-left:auto;
margin-right:auto;

  Button{
    margin-top:40px;
    margin-left:47vw;   
    &:hover{
      background-color:rgb(256,256,256);
    }
    
  }
`
const SPC = styled.span`
margin-top:40px;
display:flex;
flex:1;
color:white;
width:fit-content; 
width:-webkit-fit-content; 
width:-moz-fit-content;
align-items:center;
margin-left:auto;
margin-right:auto;
border: 1px solid white;
padding:30px
`
const Contain = styled.div`
padding:20px;

align-items:center;
font-size:40px;
color:white;
letter-spacing:1.5px;
display:flex;
flex:1;
span{
  margin-left:auto;
  margin-right:auto;
  border: 1px solid white;
  padding:30px
}
`