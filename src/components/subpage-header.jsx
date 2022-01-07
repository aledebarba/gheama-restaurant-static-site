import * as React from "react";
import logo from "../images/brand-dark-transparent.png"

export const SubPageHeader = ( props ) => {
    return (
    <div className="subpage__header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 brand">
                    <img src={logo} alt="company brand logo" />
                </div>
                <div className="col-md-4 subpage__header__image">
                    <img src={props.src} alt={props.alt}/>
                </div>
                <div className="col-md-4 subpage__header__text">
                    {props.children}
                </div>
            </div>
        </div>
        <div className="separator"></div>
    </div>
)};
