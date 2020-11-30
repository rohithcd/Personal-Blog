import React, {Component} from 'react';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';


class App extends Component{
    render()
    {
        return (
            <div>
                <Navigation/>
                <Home/>
                <About/>
                <Skills/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;