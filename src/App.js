import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from "./page/MainPage/MainPage";
import Navigation from './components/Navigation/Navigation';
import LikePostPage from './page/TimeLinePage/LikePostPage';

function App() {

  return (
    <Router>
      <div className="App">

        <Navigation/>

        <Switch>

          <Route path="/mainpage">
            <MainPage/>
          </Route>

          <Route path="/likepost">
            <LikePostPage/>
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
