import React from 'react';
import './App.css';
import Home from './home.js'
import About from './about.js'
import Services from './services.js'
import Prices from './prices.js'
import Gallery from './gallery.js'
import Contacts from './contacts.js'
import Footer from './footer.js'
import logo from './assets/logo.svg'

class App extends React.Component {
    
    constructor(){
        super()
        this.state = {
            ass: true
        }
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    scrollToTop(){
        window.scrollTo(0,0)
    }
    
  render(){
  return (
    <div className="App">
    
     <div id='navigation'>
          <img id='logo' src={logo} alt='Company logo' onClick={this.scrollToTop}/>
          <div id='navbar'>
           <a className='navitem' href="home">HOME</a>
           <a className='navitem' href='#aboutsection'>ABOUT</a>
           <a className='navitem' href='#services'>SERVICES</a>
           <a className='navitem' href='#prices'>PRICING</a>
           <a className='navitem' href='#gallery'>GALLERY</a>
           <a className='navitem' href='#contacts'>CONTACTS</a>
           </div>
        </div>

      <Home/>
      <Services />
      <About/>
      <Prices/>
      <Gallery />
      <Contacts/>
      <Footer/>
    </div>
  );
}
}

export default App;
