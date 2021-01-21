import React, { Component } from 'react';
import Blog from '../blogs/blog';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';

class Footer extends Component {
    state = {}
    render() {
        return (<div>
            <div className="container-fluid">
                <div className="row" style={{ backgroundColor: "black", textAlign: "left", color: "gray", fontSize: "14px" }}>                <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <br />
                        <h5 style={{ textAlign: "left", color: "white" }}> About</h5>
                        <br />
                        <p>Full stack developer intern at Stablx ,final year under graduate at VNR VJIET</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <br />
                        <h5 style={{ textAlign: "left", color: "white" }}> Links</h5>
                        <br />
                        <p> <span><ArrowRightAltSharpIcon />Home </span></p>
                        <p> <span><ArrowRightAltSharpIcon />About </span></p>
                        <p> <span><ArrowRightAltSharpIcon />Service</span></p>
                        <p> <span><ArrowRightAltSharpIcon />Projects </span></p>
                        {/* <p>&nbsp; <span><ArrowRightAltSharpIcon />Contact </span></p> */}

                    </div>

                    <div className="col-md-2    "> <br />
                        <h5 style={{ textAlign: "left", color: "white" }}> Tech Stack</h5>
                        <br />
                        <p> <span><ArrowRightAltSharpIcon />REACT JS</span></p>
                        <p> <span><ArrowRightAltSharpIcon />NODE </span></p>
                        <p><span><ArrowRightAltSharpIcon />EXPRESS JS</span></p>
                        <p> <span><ArrowRightAltSharpIcon />PYTHON </span></p></div>
                    <div className="col-md-1"> </div>
                    <div className="col-md-2">
                        <br />
                        <h5 style={{ textAlign: "left", color: "white" }}> Have a Questions?
</h5>
                        <br />
                        <p><span><LocationOnSharpIcon></LocationOnSharpIcon>7-30 KV reddy nagar colony,kompally,hyderabad,Telangana</span></p>
                        <p><span><CallSharpIcon></CallSharpIcon>+91 7995830577</span></p>
                        <p><span><MailOutlineSharpIcon></MailOutlineSharpIcon>dlokesh900@gmail.com</span></p>
                        <br /><br />
                        <br /><br />


                    </div>
                    <div className="col-md-1"></div>



                </div>
                <div className="row" style={{ backgroundColor: "black", textAlign: "center" }}>
                    {/* <h6 style={{ textAlign: "center", marginLeft: "350px" }}>Copyright ©2021 All rights reserved | This template is made   by Lokesh @ Stablx</h6> */}
                    <br /><br /><br /></div>



            </div>
        </div>);
    }
}

export default Footer;