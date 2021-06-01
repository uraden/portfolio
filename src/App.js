import style from "./App.module.css"
import Quiz from "./projects/Quiz"
import DetectObject from "./projects/detect0bject/DetectObject"
import AppComponent from './AppComponent'
import Game from './projects/tictactoe/Game'
import Giphy from './projects/giphy/Giphy'
import DnD from './projects/DragnDrop/dargndrop'
import AppQ from './projects/graphql-playlist copy/client/src/App'
import LocationSearchModal from './projects/map/GoogleMap'
 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;

function App() {
  
  
  return (
    <div className="App">
   
     <Router>
      <Switch>

    <Route path="/" exact  component ={AppComponent} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/detectobject" component={DetectObject} />
    <Route path="/tictactoe" component={Game} />
    <Route path="/map" component={LocationSearchModal} />
    <Route path="/giphy" component={Giphy} />
    <Route path="/dnd" component={DnD} />
    <Route path="/graphql" component={AppQ} />

    </Switch>

    </Router>
   
    </div>
  );
}

export default App;
