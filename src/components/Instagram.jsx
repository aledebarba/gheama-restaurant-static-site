import * as React from "react";
import InstagramFeed  from 'react-ig-feed'
import { StaticImage } from "gatsby-plugin-image";
import { configData } from "../data/config";

export const Instagram = () => {
    // useEffect(()=>{
    //     const div = document.closest("div").document.querySelector("video._vzTHL");
    //     div.style.display = "none";
    // },[])
    return(
    <div className="container-fluid justify-content-center my-5 pb-5">
        <div className="row ifeed">
            <InstagramFeed 
                token={configData.itb}
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
