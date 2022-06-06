import './App.css';
import Card from "./components/Card";
import {lorem, pic} from "./components/constans";

function App() {
  return (
    <div className="App">
        <Card img={pic} title={'Title'} content={lorem} ok={'http://google.com'}/>
    </div>
  );
}

export default App;