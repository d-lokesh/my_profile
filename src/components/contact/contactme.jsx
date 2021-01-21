import React, { Component } from 'react';
import "../projects/project.css"
import "../stdservice/s.css";
// import img from "../about/assets/about.jpg"
import img from "../about/assets/me1.jpg"



import DirectionsTwoToneIcon from '@material-ui/icons/DirectionsTwoTone';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import DirectionsIcon from '@material-ui/icons/Directions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';



class Contact extends Component {
    state = {}
    render() {
        return (<div>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Contact Me</h1>
                {/* <p style={{ textAlign: "center", color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia                </p> */}
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <div class="card shadow-custom" >
                            <div class="card-body" style={{ textAlign: "center" }}>
                                <HomeOutlinedIcon style={{ width: "3em", height: "3em", color: "#3eb8a5" }}></HomeOutlinedIcon>
                                {/* <DirectionsTwoToneIcon style={{ width: "80px", height: "80px", color: "#3eb8a5" }}></DirectionsTwoToneIcon> */}
                                <h5 style={{ color: "black" }}>Address</h5>
                                <p style={{ color: "gray" }}>Hydearabad, Telangana 500100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card shadow-custom">
                            <div class="card-body" style={{ textAlign: "center" }}>
                                <ContactPhoneRoundedIcon style={{ width: "3em", height: "3em", color: "#3eb8a5" }}></ContactPhoneRoundedIcon>
                                <h5 style={{ color: "black" }}>Contact Number
</h5>
                                <p style={{ color: "#3eb8a5" }}>+91 7995830577</p>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card shadow-custom">
                            <div class="card-body" style={{ textAlign: "center" }}>
                                <EmailOutlinedIcon style={{ width: "3em", height: "3em", color: "#3eb8a5" }}></EmailOutlinedIcon>
                                <h5 style={{ color: "black" }}>Email Address
</h5>
                                <p style={{ color: "#3eb8a5" }}>dlokesh900@gmail.com</p>   </div>
                            <br />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="card shadow-custom" >
                            <div class="card-body" style={{ textAlign: "center" }}>
                                <LanguageOutlinedIcon style={{ width: "3em", height: "3em", color: "#3eb8a5" }}></LanguageOutlinedIcon>
                                <h5 style={{ color: "black" }}>Website
</h5>
                                <p style={{ color: "#3eb8a5" }}>Lokeshd.com</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="" width="104.5%" height="100%" />
                        </div>
                        <div className="col-md-6" style={{ backgroundColor: "#e9f0ef" }}>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8" style={{ marginTop: "50px" }}>
                                    <form action="">

                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Name" aria-describedby="emailHelp" />
                                        <br />
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email" aria-describedby="emailHelp" />
                                        <br />

                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Subject" aria-describedby="emailHelp" />

                                        <br />
                                        <textarea class="form-control" placeholder="Message" id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                                        <br />
                                        <button style={{ borderRadius: "20px", backgroundColor: "#3eb8a5" }} type="button" class="btn ">SEND Message</button>


                                    </form>
                                </div>
                                <div className="col-md-2"></div>

                            </div>



                        </div>
                    </div>
                </div>

            </div>

        </div >);
    }
}

export default Contact;