import React, { Component } from 'react';
import img from "../resume/edu.png";
import "../resume/resume.css"
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Scard from "../resume/cards"
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class Resume extends Component {
    state = {
        flag: 2,
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        p1: 90,
        p2: 80,
        p3: 75,

    };

    componentDidMount() {

        document.addEventListener("scroll", () => {
            console.log(window.scrollY);
            const backgroundcolor = (window.scrollY > 1300 && window.scrollY < 4933) ? 1 : 2;

            this.setState({ flag: backgroundcolor });

            var mys = {
                color: "green",

            }

            if (1300 < window.scrollY && window.scrollY < 1900) {

                this.setState({ c1: true });


            }
            else {
                this.setState({ c1: false });

            }

            if (1901 < window.scrollY && window.scrollY < 3400) {

                this.setState({ c2: true });


            }
            else {
                this.setState({ c2: false });

            }
            if (3401 < window.scrollY && window.scrollY < 4055) {

                this.setState({ c3: true });


            }
            else {
                this.setState({ c3: false });

            }
            if (4056 < window.scrollY && window.scrollY < 5000) {

                this.setState({ c4: true });


            }
            else {
                this.setState({ c4: false });

            }

        });
    } render() {
        return (
            <div className="container" style={{ marginTop: "40px" }}>
                <div className="row ">


                    <div className="col-sm-3">
                        {this.state.flag === 2 ? (<div ></div>) : (<div id="sticky" style={{
                            textAlign: "left", marginTop: "90px"
                        }}>
                            <ul class="list-group list-group-flush" style={{ fontWeight: "bold" }}>
                                {this.state.c1 ? (<li class="list-group-item eff" >-Education</li>) : (<li class="list-group-item" >Education</li>)}
                                {/* <li class="list-group-item" >Education</li> */}
                                {/* <li class="list-group-item">Experience</li> */}
                                {this.state.c2 ? (<li class="list-group-item eff" >-Experience</li>) : (<li class="list-group-item" >Experience</li>)}

                                {/* <li class="list-group-item">Skills</li> */}
                                {this.state.c3 ? (<li class="list-group-item eff" >-Skills</li>) : (<li class="list-group-item" >Skills</li>)}

                                {/* <li class="list-group-item">Award</li> */}
                                {this.state.c4 ? (<li class="list-group-item eff" >-Award</li>) : (<li class="list-group-item" >Award</li>)}


                            </ul>
                        </div>)}
                    </div>



                    <div className="col-sm-8" style={{ textAlign: "left" }} >

                        <h3 style={{ color: "#3eb8a5" }}>Education</h3>
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Bachelor of Science in Computer Science
</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Diploma in Computer

</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Art & Creative Director


</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Computer Processing Systems/Computer Software

</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <br />
                        <h3 style={{ color: "#3eb8a5" }}>Experience</h3>

                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Software Developer</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Web Designer
</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                            <hr />
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Web Marketing

</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                            <hr />
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Art & Creative Director

</h4>
                                <h5>Side Tech
</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Art & Creative Director

</h4>
                                <h5>Side Tech
</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Wordpress Developer


</h4>
                                <h5>Side Tech
</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>UI/UX Designer</h4>
                                <h5>Side Tech
</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>

                        <br />
                        <br />
                        <h3 style={{ color: "#3eb8a5" }}>Skills</h3>

                        <div className="row">
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>CSS</h5>
                                        <CircularProgressbar value={this.state.p1} text={`${this.state.p1}%`} styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)

                                            strokeWidth: 1.2,
                                            textSize: '20px',
                                            textColor: "black",

                                        })} />
                                        <br />
                                        <br />

                                        <div className="row" >
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>28%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last week
</p>
                                            </div>
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>60%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last month

</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>HTML</h5>
                                        <CircularProgressbar value={this.state.p2} text={`${this.state.p2}%`} styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)

                                            strokeWidth: 1.2,
                                            textSize: '20px',
                                            textColor: "black",

                                        })} />
                                        <br />
                                        <br />

                                        <div className="row" >
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>28%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last week
</p>
                                            </div>
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>60%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last month

</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>jQuery
</h5>
                                        <CircularProgressbar value={this.state.p3} text={`${this.state.p3}%`} styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)

                                            strokeWidth: 1.2,
                                            textSize: '20px',
                                            textColor: "black",

                                        })} />
                                        <br />
                                        <br />

                                        <div className="row" >
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>28%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last week
</p>
                                            </div>
                                            <div className="col-sm-6" style={{ textAlign: "center" }}>
                                                <h6 style={{ fontWeight: "bold" }}>60%</h6>
                                                <p style={{ color: "gray", fontSize: "15px" }}>Last month

</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Photoshop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90%</p>
                                <LinearProgress variant="determinate" value="90" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>HTML5
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;95%</p>
                                <LinearProgress variant="determinate" value="95" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>WordPress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70%</p>
                                <LinearProgress variant="determinate" value="70" />
                                <br />


                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>jQuery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85%</p>
                                <LinearProgress variant="determinate" value="85" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>CSS3

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90%</p>
                                <LinearProgress variant="determinate" value="90" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>SEO
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80%</p>
                                <LinearProgress variant="determinate" value="80" />
                                <br />


                            </div>
                        </div>
                        <br /><br />
                        <h3 style={{ color: "#3eb8a5" }}>Awards
</h3>

                        <br />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Top 4 Web Tester



</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Top 5 LeaderShip Exellence Winner




</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Top 10 Web Developer



</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                {/* <img src={img} alt="" height="70%" width="70%" /> */}
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Art & Creative Director




</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
