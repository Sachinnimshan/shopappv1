import './App.css';
import Header from './Header/Header';
import HomeScreen from './Products/HomeScreen';
import ProductScreen from './Products/ProductScreen';
import CartScreen from './Cart/CartScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Signin from './SignIn/Signin';
import Register from './SignIn/Register';
import Shipping from './Shipping/Shipping';
import Payments from './Payments/Payments';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Switch>
         <Route exact path='/' component={HomeScreen}/>
         <Route path="/product/:id" component={ProductScreen}/>
         <Route path='/cart/:id?' component={CartScreen}/>
         <Route path='/signin' component={Signin}/>
         <Route path='/register' component={Register}/>
         <Route path='/shipping' component={Shipping}/>
         <Route path='/payments' component={Payments}/>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
