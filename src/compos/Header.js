import React from 'react'
import Button from '@material-ui/core/Button';
import styled from "styled-components";

function Header({setLoad, user}) {


    const handleLogin= () => {
    setLoad(true);        
    }
    return (
        <Wrapper>
      
           <Cont>Hi <strong><span>{user.displayName}</span></strong>, you have logged in using the email: <b><span>{user.email}</span></b></Cont>&emsp;&emsp;
            <Button variant="outlined" color="secondary" onClick={handleLogin}>
          Logout
        </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display:flex;

Button{
    flex:1;
}
`
const Cont = styled.div`
margin: 0px 0px;
align-items:center;

span{
    font-size:20px;
}

`


export default Header
