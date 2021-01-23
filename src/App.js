import logo from './logo.svg';
import './App.css';
import Home from "./components/home"
import { ReactTitle } from 'react-meta-tags';


//import Content from "./components/typewriter";

function App() {
  return (
    <div className="App">
      <ReactTitle title="Lokesh_profile" />

      <Home></Home>
    </div>

  );
}

export default App;
