import React, { Component } from 'react';
import about from "./assets/about.jpg"
class About extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={about} alt="" width="106.5%" height="100%" />
                        </div>
                        <div className="col-sm-6" style={{ textAlign: "left" }}>
                            <div className="row" style={{ marginTop: "40px" }}>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-11">
                                    <h1 style={{ fontWeight: "bold" }} >About Me</h1>
                                    <br />
                                    <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia</h6>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <h6>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "gray" }}> Donga Lokesh</span></h6>
                                            <h6>Date of birth:&nbsp; <span style={{ color: "gray" }}> December 29, 1998</span></h6>
                                            <h6>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "gray" }}> kompally , Hyderabad</span></h6>
                                            <h6>Zip code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "gray" }}>500100</span></h6>
                                            <h6>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "gray" }}> dlokesh900@gmail.com</span></h6>
                                            <h6>Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "gray" }}> 7995830577</span></h6>

                                        </div>
                                        <div className="col-sm-1">
                                        </div>
                                    </div>

                                    <br />
                                    <br />
                                    <br />
                                    <h4 > <span style={{ color: "#3eb8a5" }}>120</span> Project completed</h4>

                                    <br />
                                    <button style={{ borderRadius: "20px", backgroundColor: "#3eb8a5" }} type="button" class="btn ">Download cv</button>

                                </div>

                                <div className="col-sm-2"></div>

                            </div>
                        </div>                  </div>

                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/partner-1.png" alt="" height="100%" width="100%" />
                        </div>
                        <div className="col-sm-2">
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/partner-2.png" alt="" height="100%" width="100%" />
                        </div>
                        <div className="col-sm-2">
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/partner-3.png" alt="" height="100%" width="100%" />
                        </div>
                        <div className="col-sm-2">
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/partner-4.png" alt="" height="100%" width="100%" />
                        </div>
                        <div className="col-sm-2">
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/partner-5.png" alt="" height="100%" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;