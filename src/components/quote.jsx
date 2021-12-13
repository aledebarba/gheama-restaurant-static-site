import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const Quote = props => { return(
    <div className="section-default">
        <div className="image-at-right">
            <StaticImage 
                src={'../images/founder.png'} 
                transformOptions={ {grayscale: true} }
                alt={'founder of the restaurant - woman looking seriously'}
                />
        </div>
        <div className="text-semi-left">
            <h3>“Our guests should feel at home where they constantly discover something new and interesting to them. Where they can feel free to express themselves, have fun and enjoy beautiful moments together with us.”</h3>
            <small>Irina Shengelidze</small>
            <br/>
            <Link to='/about/'>
                <button className="btn btn-outline-dark btn-sm rounded-pill mt-2">
                    Read More
                </button>
            </Link>
        </div>
    </div>
)}
