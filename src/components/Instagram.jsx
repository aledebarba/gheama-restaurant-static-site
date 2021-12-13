import * as React from "react";
import InstagramFeed  from 'react-ig-feed'
import { StaticImage } from "gatsby-plugin-image";

export const Instagram = () => {return(
    
    <div className="container-fluid justify-content-center my-5 pb-5">
        <div className="row ifeed">
            <InstagramFeed 
                token="IGQVJVSHB3QmhEb3ZAjeWZAuaktXQW5ZAQ0huNHRaV3NSQ2hFMnJqTUdFQUc0a1d6aXNVTkxqWkNYZATNzOUM5SmJJZAXZACb3ZAQQ1hFNFVKa2g3TUdfYi00eTh3bWRwSDBwV04walI2aUpaVUNMZAF9RbHRQbQZDZD"
                counter="12"
            /> 
        </div>
        <div className="row justify-content-center mt-4">
            <div className="com-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                <a href='https://instagram.com/gheamarestaurant' target="_blank" className="btn btn-dark rounded-pill" rel="noreferrer"><StaticImage src='../images/social/instagram-mini.png' alt='mini instagram icon'/>&nbsp;Follow&nbsp;Us&nbsp;on Instagram</a>
            </div>
        </div>
    </div>
)}
