import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/MainPage';



function App() {
  
  return (
    <div className="App">
     <Main/>
    </div>
  );
}

export default App;
