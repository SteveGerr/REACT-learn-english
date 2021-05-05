
import './App.css';
import MainScreen from './components/MainScreen/MainScreen';


let App = (props) => {
  return (
    <div className="App">
      <MainScreen
        state={props.state}
        sendAnswer={props.sendAnswer}
        addWord={props.addWord} />
    </div>
  );
}

export default App;
