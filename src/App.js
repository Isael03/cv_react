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

        <Switch>
          <Redirect from="/" to="/cv" />
          <Route exact path="/" />

        </Switch>
        <Switch>
          <Route path="/cv" component={CV} />

        </Switch>

      </HelmetProvider>

    </Router >



  );
}

export default App;
