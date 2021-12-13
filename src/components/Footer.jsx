import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Footer = () => {return(
    <div className="container-fluid my-4 page-footer">
        <div className="container-lg justify-content-center">
            <div className="footer-menu">
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Contact</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Spotted On</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Locations</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Career</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Our Services</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Events</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Policies</Link></div>
            </div>
            <div className="footer-details">
                
                        <form className='contactform'>
                            <input type="text" name="yourinfo" placeholder="Type Your Email" />
                            <input type="submit" value=">" />
                        </form>
                    
                    <div className="social-menu">
                        <div className="social-item"><a href='https://spotify.com' title='follow us on spotify' rel="noreferrer" target="_blank"><StaticImage src='../images/social/spotify.png' alt='select this item to access spotify'/></a></div>
                        <div className="spcial-item"><a href='https://soundcloud.com' title='follow us on soundcloud' rel="noreferrer" target="_blank"><StaticImage src='../images/social/soundcloud.png' alt='select this item to access soundcloud'/></a></div>
                        <div className="spcial-item"><a href='https://facebook.com' title='follow us on facebook' rel="noreferrer" target="_blank"><StaticImage src='../images/social/facebook.png' alt='select this item to access facebook'/></a></div>
                        <div className="spcial-item"><a href='https://twitter.com' title='follow us on twitter' rel="noreferrer" target="_blank"><StaticImage src='../images/social/twitter.png' alt='select this item to access twitter'/></a></div>
                        <div className="spcial-item"><a href='https://youtube.com' title='follow us on youtube' rel="noreferrer" target="_blank"><StaticImage src='../images/social/youtube.png' alt='select this item to access youtube'/></a></div>
                    </div>
                
            </div>
            <div className="row justify-content-center">
                <div className="col-3">

                        <button className="btn btn-dark mx-1">ENGLISH</button>


                        <button className="btn btn-light mx-1">ITALIAN</button>

                </div>
            </div>
        </div>
    </div>
)}
