import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Proyecto from './components/Proyecto';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './shared/Header';
import Whatsapp from './components/whatsapp';
import Footer from './shared/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Proyectos from './pages/Proyectos';







class App extends Component {

  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
  render() { 
    return (  
      <Router>
      <Header/>
     
      <div className="mt-5 pt-5">
     
     
        <Switch>
     
     
     
          <div data-aos="zoom-in">
          <Route exact path="/" component={Home}/>
      <Route exact path="/quien-soy" component={Proyectos}/> 
    
          <Route exact path="/quien-soy/:id" component={Proyecto}/>
          </div>
     
     
        </Switch>
        <Whatsapp/>
        </div>
        <div className=" mt-5 card p-5 reducir">
     <Footer/>
        </div>
       
      </Router>
    );
  }
}
 
export default App;

