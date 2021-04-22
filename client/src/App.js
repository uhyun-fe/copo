import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import GlobalStyle from "./global/styles";
import { Home, Login, Signup } from "./routes";

// copo main app
const App = () => {
   return (
      <Router>
         <GlobalStyle />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect from="*" to="/" />
         </Switch>
      </Router>
   );
};

export default App;
