import logo from './logo.svg';
import './App.css';
import { Container, Row, Col ,Button } from "reactstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Button className='p-4 mt-4'>Hello</Button> 
    </div>
  );
}

export default App;
