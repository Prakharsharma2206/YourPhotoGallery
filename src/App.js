import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  const [user, setUser] = useState();

  {
    /* {user && <div>{user.email}<img src={user.photoURL}/><div>{user.displayName}</div></div>} */
  }
  // console.log(user);
 
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login user={user} setUser={setUser} />{" "}
        </Route>     
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>

    // <div><Router>
    //   {user==null ?
    //       <Route path="/login"><Login user={user} setUser={setUser} /> </Route>
    //       :<Route path="/"><Dashboard /></Route>
    //       }
    //       </Router>
    // </div>
  );
}

export default App;
