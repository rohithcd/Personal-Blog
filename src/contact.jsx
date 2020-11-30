import react, {Component} from 'react';
import firebase from "firebase";
var uuid = require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyBxG1n1uux-hQySkCu_-qHEOoZ6lzKNSF4",
    authDomain: "personal-blog-8e2ea.firebaseapp.com",
    databaseURL: "https://personal-blog-8e2ea.firebaseio.com",
    projectId: "personal-blog-8e2ea",
    storageBucket: "personal-blog-8e2ea.appspot.com",
    messagingSenderId: "235459568134",
    appId: "1:235459568134:web:0e999f7649e3582f4e1987",
    measurementId: "G-LV9PH9H3JD"
  };

  firebase.initializeApp(firebaseConfig);

class Contact extends Component{

    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({

          [e.target.name]: e.target.value

        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
          uname: this.state.name,
          uemail: this.state.email,
          usubject: this.state.subject,
          umessage: this.state.message
        }

        itemsRef.push(item);
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
      }

    render(){

        return(
            <div className="contact-div" id="contact">
                <h1>Contact Me</h1>
                <div className="contact-sec">
                    <div className="contact-section-1"> 
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} value={this.state.name}></input> 
                            <br/>
                            <input type="email" name="email" placeholder="Your E-mail" onChange={this.handleChange} value={this.state.email}></input>
                            <br/>
                            <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange} value={this.state.subject}></input>
                            <br/>
                            <textarea name="message" placeholder="Your Message" onChange={this.handleChange} value={this.state.message}></textarea>
                            <button id="contact-submit" type="submit">Submit</button>
                        </form>
                        
                    </div>
                    <div className="contact-section-2">
                        <div className="contact-details">
                            <div>
                                <h4>Address:</h4>
                                    <p>
                                        Chenangat House, <br/> S.N.R.R.A 2nd Street,
                                        <br/> Koorkenchery P.O, <br/> Thrissur
                                    </p>
                            </div>
                            <div>
                                <h4>Phone:</h4>
                                <p>
                                    9446584582
                                </p>
                            </div>
                            <div>
                                <h4>E-mail:</h4>
                                 <p>
                                     rohithdinesan1@gmail.com <br/>
                                    rohithmaddz7@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;