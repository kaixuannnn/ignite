import React from "react";
import Game from "./Components/Game";
import GlobalStyles from "./Components/GlobalStyles";
import Home from "./pages/Home";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <GlobalStyles />
      <Route path={["/game/:id","/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
