import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({children, user , ...rest }) => {
    console.log(user)
  return (
    <Route {...rest} 
    render={() =>{
        return user!== null ? children : <Redirect to="/login"/>
    }}></Route>
  );
};
export default PrivateRoute;
