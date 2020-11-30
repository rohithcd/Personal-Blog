import react, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <div className="about-div" id="about">
                <h1>About Me</h1>
                <div className="about-section">
                    <div className="about-image">
                        <img src="img-rohith.jpeg"  className="img-2"/>
                    </div>
                    <div className="about-text">
                        <div>
                            <p>
                                I'm a Btech second year student @School of Engineering, CUSAT
                            </p>
                                <br/>
                            <p>
                                I love to work in User Experience & User Interface designing.
                                Because I love to solve the design problem and find easy and better solutions to solve it.
                                I always try my best to make good user interface with the best user experience.
                            </p>
                                <br/>
                            <p>
                                Working on Artificial Intelligence Project CUSAT, Kalamassery
                            </p>
                        </div>
                        <div className="about-icons">
                            <div className="icons">
                                <figure>
                                    <object type="image/svg+xml" data="laboratory.svg" />
                                    <figcaption>Developer</figcaption>
                                </figure>
                                <figure>
                                    <object type="image/svg+xml" data="chat-bubble.svg"/> 
                                    <figcaption>Programmer</figcaption>  
                                </figure>    
                            </div>

                            <div className="icons">
                                <figure>
                                    <object type="image/svg+xml" data="loupe.svg"/>
                                    <figcaption>Designer</figcaption>
                                </figure>
                                <figure>
                                    <object type="image/svg+xml" data="laboratory.svg"/> 
                                    <figcaption>Creator</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;