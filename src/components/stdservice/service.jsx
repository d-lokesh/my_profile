import React, { Component } from 'react';
import "../stdservice/s.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SearchIcon from '@material-ui/icons/Search';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import WebIcon from '@material-ui/icons/Web';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
class Service extends Component {
    state = {}
    render() {
        return (
            <div className="container">

                <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>Services</h1>
                <br />
                <p style={{ color: "gray" }}>

                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia


                </p>
                <br />
                <br />

                <div className="row">
                    <div className="col-md-4">
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <SearchIcon style={{ width: "80px", height: "80px", color: "blue" }} ></SearchIcon>
                                <h6 style={{ fontSize: "15px" }}>WEB DESIGN</h6>
                                <hr style={{ marginLeft: "130px", marginRight: "130px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <EmojiObjectsIcon style={{ width: "80px", height: "80px", color: "blue" }} ></EmojiObjectsIcon>
                                <h6 style={{ fontSize: "15px" }}>APP DEVELOPMENT</h6>
                                <hr style={{ marginLeft: "130px", marginRight: "130px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <AddAPhotoIcon style={{ width: "80px", height: "80px", color: "blue" }} ></AddAPhotoIcon>
                                <h6 style={{ fontSize: "15px" }}>PHOTOGRAPHY</h6>
                                <hr style={{ marginLeft: "110px", marginRight: "110px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <BrandingWatermarkIcon style={{ width: "80px", height: "80px", color: "blue" }} ></BrandingWatermarkIcon>
                                <h6 style={{ fontSize: "15px" }}>BRANDING</h6>
                                <hr style={{ marginLeft: "130px", marginRight: "130px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <WebIcon style={{ width: "80px", height: "80px", color: "blue" }} ></WebIcon>
                                <h6 style={{ fontSize: "15px" }}>WEB DESIGN</h6>
                                <hr style={{ marginLeft: "130px", marginRight: "130px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="card shadow-custom h" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <WbIncandescentIcon style={{ width: "80px", height: "80px", color: "blue" }} ></WbIncandescentIcon>
                                <h6 style={{ fontSize: "15px" }}>PRODUCT STRATEGY</h6>
                                <hr style={{ marginLeft: "130px", marginRight: "130px", color: "blue" }} />

                                <br />
                                <p style={{ color: "black" }}> A small river named Duden flows by th    eir place and supplies it with the necessary regelialia</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Service;