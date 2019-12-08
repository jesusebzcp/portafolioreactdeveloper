import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';

import jesus from '../assets/img/perfil.jpeg'
import {Link} from 'react-router-dom'
import creatividad from '../assets/img/creatividad.png'
import desktop from '../assets/img/code.png'
import phone from '../assets/img/phonEYEBZsvg.png'
import Gallery from '../components/Galeria';
import AOS from 'aos';
import 'aos/dist/aos.css';



class Home extends Component {
    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() { 
        return ( 

            <Fragment>
            <header className="headerPrincipal">
            
               <div className="contenedorFlex" >
           
                   <div className="contenedorImg" >
                   
                   <img src={jesus} className="jesus"/>
           
                   </div>
                   <div className="encabezado mx-auto">
               <div className="contPresentacion" >
               <h5 className="hola mt-2">
               Hola!
        
               </h5>
               <h3 className="yo">
               Soy Jesus Brice&ntilde;o!
               </h3>
               <div className="profesion" >
           
               <h1>Desarrollador web <span className="pro">Front-End</span></h1>
           
               </div>
               <div className="boton mt-5">
               <Link className="btn btn-light btn-p" to="/quien-soy">Ver Perfil    <i class="fas fa-user"></i></Link>
           
               </div>
               </div>
               </div>
           
               </div>
           </header>
           <div className="container card-supreme " data-aos="fade-up" >
           <section className="habilidades">
               <h2>Creatividad</h2>
               <div className="d-flex habilidadesDes my-4">
           <div className="contImg1 ">
           
           <img className="py-5" src={creatividad} alt="creatividad"/>
           
           </div>
           <div className="contP mx-auto mt-5">
           {/* <h3>Dise&ntilde;o reponsivo</h3> */}
           <h3>Educacion del ojo</h3>
           <p>
           
           
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ultrices nunc. In at odio tincidunt, faucibus purus et, venenatis eros. Sed sed risus quam. Proin et odio viverra ligula pellentesque ultricies at sit amet eros. Nullam ultricies risus orci, eu sodales nulla aliquet quis. Pellentesque feugiat mattis rhoncus. Vestibulum
           </p>
           
           </div>
               </div>
           </section>
           </div>
           
           <div className="container card-supreme" data-aos="fade-up">
           <section className="habilidades">
               <h2>Concetracion</h2>
               <div className="d-flex habilidadesDes my-4">
           <div className="contImg1 ">
           
           <img className="py-5" src={desktop} alt="creatividad"/>
           
           </div>
           <div className="contP mx-auto mt-5">
           {/* <h3>Dise&ntilde;o reponsivo</h3> */}
           <h3>Educacion del ojo</h3>
           <p>
           
           
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ultrices nunc. In at odio tincidunt, faucibus purus et, venenatis eros. Sed sed risus quam. Proin et odio viverra ligula pellentesque ultricies at sit amet eros. Nullam ultricies risus orci, eu sodales nulla aliquet quis. Pellentesque feugiat mattis rhoncus. Vestibulum
           </p>
           
           </div>
               </div>
           </section>
           </div>
           
           
           <div className="container card-supreme" data-aos="fade-up">
           <section className="habilidades">
               <h2>Creatividad</h2>
               <div className="d-flex habilidadesDes my-4">
           <div className="contImg1 py-2 text-center">
           
           <img  src={phone} alt="creatividad"/>
           
           </div>
           <div className="contP mx-auto mt-5">
           <h3>Dise&ntilde;o reponsivo</h3> 
           
           <p>
           
           
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ultrices nunc. In at odio tincidunt, faucibus purus et, venenatis eros. Sed sed risus quam. Proin et odio viverra ligula pellentesque ultricies at sit amet eros. Nullam ultricies risus orci, eu sodales nulla aliquet quis. Pellentesque feugiat mattis rhoncus. Vestibulum
           </p>
           
           </div>
               </div>
           </section>
           </div>
           
           
           <div className="wave">
           
           
           <div className="container card-supreme mt-5" data-aos="fade-up">
           <h2>Galeria</h2>
           <div className="galeriacont " >
           <div className="galeria">
           <Gallery/>
           </div>
           
           <div className="cont-p2 mt-5" >
               <p>
               point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
               </p>
               <div className="btn-1" >
                   <Link to="/portafolio" className="btn btn-block btn-primary mb-2" >Ver Proyectos | <i class="fas fa-location-arrow"></i></Link>
               </div>
           </div>
           </div>
           
           </div>
           </div>
           
           
           
           
           </Fragment>
         );
    }
}
 


 
const DEFAULT_INPUT_TEXT = "";
 
class MyInput extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      text: DEFAULT_INPUT_TEXT,
    };
  }
 
  changeText(e) {
    let text = e.target.value;
 
    this.setState({
      text,
    });
 
    /*
     * This will update the value that the confirm
     * button resolves to:
     */
    swal.setActionValue(text);
  }
 
  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.changeText.bind(this)}
      />
    )
  }
}
 
// We want to retrieve MyInput as a pure DOM node: 
let wrapper = document.createElement('div');
ReactDOM.render(<MyInput />, wrapper);
let el = wrapper.firstChild;
 
swal({
  text: "Hola como te llamas?   (Opcional)",
  content: el,
  buttons: {
    confirm: {
      /*
       * We need to initialize the value of the button to
       * an empty string instead of "true":
       */
      value: DEFAULT_INPUT_TEXT,
    },
  },
})
.then((value) => {
  swal(`Bienvenido ${value}`);
});



 
export default Home;