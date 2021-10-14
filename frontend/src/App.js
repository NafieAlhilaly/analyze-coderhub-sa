import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Downlaods from './components/Downloads';
import Welcome from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/downloads">
            <Downlaods/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
