import React from "react";
import GlobalStyles from "./Components/GlobalStyles";
import Home from "./pages/Home";
import {Route} from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App"> 
      <GlobalStyles />
      <Nav />
      <Route path={["/ignite/game/:id","/ignite"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
