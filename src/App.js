import Templates from './components/Templates/Templates'
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Templates />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
