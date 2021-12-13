import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Video from 'react-responsive-video';
import { configData } from "../data/config";

export const Header = () => <>
    <div className="containerl-fluid">
        <div className='header-content'>
            <BackgroundImage />
            <div className='video-container'>
                <Video 
                    mp4={configData.videosource} 
                    height={"100vh"}
                    objectFit={"cover"}
                />        
            </div>
            <OverlayLogo />
        </div>
    </div>
</>;

const BackgroundImage = () => <StaticImage 
        src={'../images/poster.jpeg'} 
        layout={'fullWidth'}
        alt={'placeholder for video, if it fail to load, showing a valey and moutains at each side'}
    />

const OverlayLogo = () => { return (
    <div className='logo-container'>
        <StaticImage
            src={'../images/brand-white-transparent.png'}
            alt={'company brand - it is a deer with a moon'}
        />
        </div>
)}