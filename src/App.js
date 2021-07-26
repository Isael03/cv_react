import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { CV } from "./pages/cv";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv">
          <CV />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
