import Form from './Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
