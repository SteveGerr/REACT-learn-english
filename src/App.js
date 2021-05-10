
import './App.css';
import MainScreen from './components/MainScreen/MainScreen';


let App = (props) => {
  const { Store } = props
  console.log(Store);
  return (
    <div className="App">
      <MainScreen
        state={Store.getState()}
        Store={Store}
        storeAddWord={Store.storeAddWord}
     />
    </div>
  );
}

export default App;
