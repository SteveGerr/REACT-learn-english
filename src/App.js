
import './App.css';
import MainScreen from './components/MainScreen/MainScreen';


let App = (props) => {
  const { Store } = props
  return (
    <div className="App">
      <MainScreen
        state={Store.state}
        Store={Store}
        storeAddWord={Store.storeAddWord}
     />
    </div>
  );
}

export default App;
