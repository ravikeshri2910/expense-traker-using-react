import logo from './logo.svg';
import './App.css';
// import {Button} from 'react-bootstrap '
import SinupPage from './Pages/SinupPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import ContactFormPage from './Pages/ContactFormPage';
import VerifyEmailPage from './Pages/VerifyEmailPage';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import ExpensesDetails from './Components/Expenses/ExpensesDetails';
import Expenses from './Components/Expenses/Expenses';
import { useSelector } from 'react-redux';

function App() {

  const theme = useSelector((state) => state.themeReducer.theme); // Get the current theme from Redux store

  console.log('theme', theme)
  return (
    <div className={`App ${theme}`}>
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
        <Route path = '/verify-email'>
          <VerifyEmailPage />
        </Route>
        <Route path = '/forget-password'>
          <ForgetPasswordPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
