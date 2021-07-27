import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


import { CV } from "./pages/cv";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Switch>
          <Route path="/cv" component={CV} />

        </Switch>

      </HelmetProvider>

    </Router>



  );
}

export default App;
