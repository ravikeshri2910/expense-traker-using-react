import logo from './logo.svg';
import './App.css';
// import {Button} from 'react-bootstrap '
import SinupPage from './Pages/SinupPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import ContactFormPage from './Pages/ContactFormPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/sinUp'>
          <SinupPage />
        </Route>
        <Route path = '/' exact>
          <HomePage />
        </Route>
        <Route path = '/contact-form'>
          <ContactFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
