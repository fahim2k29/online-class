import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  
  return (
  // <div>
  //   <Home/>
  // </div>
   <Router>
    <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/course/:courseId">
          <CourseDetails/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
    </Switch>
 </Router>
 
  );
}

export default App;
