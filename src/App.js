import './App.css';
import Home from './Home';
import { Route , Switch } from 'react-router-dom';
import Taskpage from './Taskpage';
import Resources from './Resources';
import Signup from './Signup';
import Dashboard from './Dashboard';
function App() {
  return (
   <>
   <Switch>
      <Route exact path = '/' component = {Home}  />
      <Route exact path = '/task' component = {Taskpage}  />
      <Route exact path = '/resources' component = {Resources}  />
      <Route exact path = '/signup' component = {Signup}  />
      <Route exact path = '/dashboard' component = {Dashboard}  />
   </Switch>
 
   </>
  );
}

export default App;
