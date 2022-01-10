import React, { useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { configData } from "../data/config";
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [ emailStatus, setEmailStatus ] = useState("ready");
    const contactForm = useRef()
    
    const sendEmail = (e) => {
        setEmailStatus("sending");
        e.preventDefault();        
        emailjs.sendForm(configData.contactForm.SERVICE_ID, configData.contactForm.TEMPLATE_ID, contactForm.current, configData.contactForm.USER_ID)
          .then((result) => {
              setEmailStatus("success");
              
          }, (error) => {
              setEmailStatus("error");
              console.log(`email sending error : ${error}`)
          });
      };

    return(
    <div className="container-fluid section-contacts" id='contact'>
        <div className="row justify-content-center mx-4">
            <div className="col-sm-12 col-md-5">
                <div className="contact__form">
                    <h1>Conctact Us</h1>
                    <form ref={contactForm} onSubmit={sendEmail}>
                        <label htmlFor="customer_name">Name</label>
                        <input type="text" id='customer_name' name="customer_name" required placeholder="Your name" />

                        <label htmlFor="customer_info">Email</label>
                        <input type="email" id='customer_info' name="customer_info" required placeholder="Your email" />
                        
                        <label htmlFor="customer_subject">Subject</label>
                        <input type="text" id='customer_subject' name="customer_subject" required placeholder="Subject" />
                        
                        <label htmlFor="customer_message">Your Message</label>
                        <textarea id='customer_message' required name="customer_message" placeholder="Type your message" />

                        { ( emailStatus === "ready" || emailStatus === "success" ) && <input type="submit" value="Send Message" className="btn btn-dark rounded-pill mt-3"/> }
                        
                        { emailStatus === "error" && <p className="email_error">There was an error sending the email. Please try later</p> }
                        
                        { emailStatus === "sending" && <p className="email_sending">Sending...</p> }
                        
                        { emailStatus === "success" && <p className="email_success">Your message was sent</p> }
                    </form>
                </div>
            </div>
            <div className="col-sm-12 col-md-5 contact__map">
                <div dangerouslySetInnerHTML={{__html: configData.googleMapsEmbedCode }}></div>
            </div>
            <div className="col-sm-12 col-md-2 contact__shortcuts mt-sm-5 mt-md-0">
                <div className='shortcut'>
                    <a href='https://goo.gl/maps/Xbg6PeJG7VcvMbH3A' target="_blank" rel="noreferrer" >
                        <small><StaticImage src='../images/mini-icon-map.png' alt='a very small map pin icon'/>Address</small>
                        <p>{configData.address}</p>
                    </a>
                </div>
                <div className="shortcut">
                    <a href={'https://www.google.com/maps/dir//'+configData.address+'/'} target="_blank" rel="noreferrer" >
                        <small><StaticImage src='../images/mini-icon-route.png' alt='a very small map unfolded with a route icon'/>Trace a Route</small>
                        <p>From: Your Place<br/>To: Restaurant</p>
                    </a>
                </div>
                <div className="shortcut">
                    <a href={'tel:'+configData.phone} >
                        <small><StaticImage src='../images/mini-icon-phone.png' alt='a very small telephone icon'/>Place a Call</small>
                        <p>{configData.phone}</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
)};
