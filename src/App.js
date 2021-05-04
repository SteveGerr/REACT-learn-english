
import './App.css';
import React from "react";
import MainScreen from './components/MainScreen/MainScreen';


function App(props) {
  return (
    <div className="App">
      <MainScreen
        state={props.state}
        addAnswer={props.addAnswer}
        addWord={props.addWord} />
    </div>
  );
}

export default App;
