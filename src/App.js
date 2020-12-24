import './App.css';
import Header from './Header/Header';
import HomeScreen from './Products/HomeScreen';
import ProductScreen from './Products/ProductScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Switch>
         <Route exact path='/' component={HomeScreen}/>
         <Route path="/product/:id" component={ProductScreen}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
