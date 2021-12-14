import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { configData } from "../data/config";

export const Contact = () => {return(
    <div className="container-fluid section-contacts">
        <div className="row justify-content-center mx-4">
            <div className="col-sm-12 col-md-5">
                <div className="contact__form">
                    <h1>Conctact Us</h1>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <label htmlFor="form_name">Name</label>
                        <input type="text" id='form_name' placeholder="Your name" />
                        
                        <label htmlFor="form_subject">Subject</label>
                        <input type="text" id='form_subject' placeholder="Subject" />
                        
                        <label htmlFor="form_message">Your Message</label>
                        <textarea id='form_message' placeholder="Type your message" />
                        
                        <input type="submit" value="Send Message" className="btn btn-dark rounded-pill w-25 mt-3"/>
                    </form>
                </div>
            </div>
            <div className="col-sm-12 col-md-5 contact__map">
                <div dangerouslySetInnerHTML={{__html: '<iframe src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.38465919763!2d-6.270906083597891!3d53.33637017997693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c205b04e8f9%3A0x3ae7f85f1842781b!2s20%20Camden%20Row%2C%20Portobello%2C%20Dublin%208%2C%20D08%20H294%2C%20Irlanda!5e0!3m2!1spt-BR!2s!4v1639434474297!5m2!1spt-BR!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'}}></div>
            </div>
            <div className="col-sm-12 col-md-2 contact__shortcuts mt-sm-5 mt-md-0">
                <div className='shortcut'>
                    <a href='https://goo.gl/maps/Xbg6PeJG7VcvMbH3A' target="_blank" rel="noreferrer" >
                        <small><StaticImage src='../images/mini-icon-map.png' alt='a very small map pin icon'/>Address</small>
                        <p>{configData.address}</p>
                    </a>
                </div>
                <div className="shortcut">
                    <a href='https://www.google.com/maps/dir//20+Camden+Row,+Portobello,+Dublin+8,+D08+H294,+Irlanda/@53.3363706,-6.2731199,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48670c205aee0ba9:0x97ae0ffbfe31d449!2m2!1d-6.2687425!2d53.3363643' target="_blank" rel="noreferrer" >
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
