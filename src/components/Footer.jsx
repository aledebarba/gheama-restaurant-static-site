import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { configData } from "../data/config";

export const Footer = () => {return(
    <div className="container-fluid my-4 page-footer">
        <div className="container-lg justify-content-center">
            <div className="footer-menu">
                <div className="footer-menu-item"><Link to="#contact" className="btn">Contact</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Spotted On</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Locations</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Career</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Our Services</Link></div>
                <div className="footer-menu-item"><Link to="/soon/" className="btn">Events</Link></div>
                <div className="footer-menu-item"><a href={configData.policiesURL} className="btn" rel="noreferrer" target="_blank">Policies</a></div>
            </div>
            <div className="footer-details">
                
                        <form className='contactform'>
                            <input type="text" name="yourinfo" placeholder="Type Your Email" />
                            <input type="submit" value=">" />
                        </form>
                    
                    <div className="social-menu">
                        <div className="social-item"><a href={configData.social.spotify} title='follow us on spotify' rel="noreferrer" target="_blank"><StaticImage src='../images/social/spotify.png' alt='select this item to access spotify'/></a></div>
                        <div className="spcial-item"><a href={configData.social.soudcloud} title='follow us on soundcloud' rel="noreferrer" target="_blank"><StaticImage src='../images/social/soundcloud.png' alt='select this item to access soundcloud'/></a></div>
                        <div className="spcial-item"><a href={configData.social.facebook} title='follow us on facebook' rel="noreferrer" target="_blank"><StaticImage src='../images/social/facebook.png' alt='select this item to access facebook'/></a></div>
                        <div className="spcial-item"><a href={configData.social.twitter} title='follow us on twitter' rel="noreferrer" target="_blank"><StaticImage src='../images/social/twitter.png' alt='select this item to access twitter'/></a></div>
                        <div className="spcial-item"><a href={configData.social.youtube} title='follow us on youtube' rel="noreferrer" target="_blank"><StaticImage src='../images/social/youtube.png' alt='select this item to access youtube'/></a></div>
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
