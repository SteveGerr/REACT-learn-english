
import './App.css';
import MainScreen from './components/MainScreen/MainScreen';


let App = (props) => {

  return (
    <div className="App">
      <MainScreen
        state={props.state}
        sendAnswer={props.sendAnswer}
        storeAddWord={props.storeAddWord}
        enterTxt={props.enterTxt}
     />
    </div>
  );
}

export default App;
