import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:num">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
