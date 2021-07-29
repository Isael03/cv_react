import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


import { CV } from "./pages/cv/cv";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Redirect to="/cv" />
        <Switch>
          <Route exact path="/" />
        </Switch>
        <Switch>
          <Route path="/cv">
            <CV />
          </Route>

        </Switch>

      </HelmetProvider>

    </Router >



  );
}

export default App;
