import React, { Component } from 'react';
import img from "../resume/edu.png";
import "../resume/resume.css"
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { BrowserView, MobileView } from 'react-device-detect';

import Scard from "../resume/cards"
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

class Resume extends Component {
    state = {
        flag: 2,
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        p1: 50,
        p2: 60,
        p3: 85,

    };

    componentDidMount() {

        document.addEventListener("scroll", () => {
            console.log(window.scrollY);
            const backgroundcolor = (window.scrollY > 1339 && window.scrollY < 3347) ? 1 : 2;

            this.setState({ flag: backgroundcolor });

            var mys = {
                color: "green",

            }

            if (1339 < window.scrollY && window.scrollY < 1784) {

                this.setState({ c1: true });


            }
            else {
                this.setState({ c1: false });

            }

            if (1785 < window.scrollY && window.scrollY < 2272) {

                this.setState({ c2: true });


            }
            else {
                this.setState({ c2: false });

            }
            if (2273 < window.scrollY && window.scrollY < 2613) {

                this.setState({ c3: true });


            }
            else {
                this.setState({ c3: false });

            }
            if (2614 < window.scrollY && window.scrollY < 3347) {

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

                    <div className="col-sm-3">                    <BrowserView>

                        {this.state.flag === 2 ? (<div ></div>) : (<div id="sticky" style={{
                            textAlign: "left", marginTop: "90px"
                        }}>
                            <ul class="list-group list-group-flush" style={{ fontWeight: "bold", padding: "8px" }}>
                                {this.state.c1 ? (<li class="list-group-item eff"  >-Education</li>) : (<li class="list-group-item" >Education</li>)}
                                {/* <li class="list-group-item" >Education</li> */}
                                {/* <li class="list-group-item">Experience</li> */}
                                {this.state.c2 ? (<li class="list-group-item eff"  >-Experience</li>) : (<li class="list-group-item" >Experience</li>)}

                                {/* <li class="list-group-item">Skills</li> */}
                                {this.state.c3 ? (<li class="list-group-item eff" >-Skills</li>) : (<li class="list-group-item" >Skills</li>)}

                                {/* <li class="list-group-item">Award</li> */}
                                {this.state.c4 ? (<li class="list-group-item eff" >-Award</li>) : (<li class="list-group-item" >Award</li>)}


                            </ul>
                        </div>)}
                    </BrowserView>

                    </div>




                    <div className="col-sm-8" style={{ textAlign: "left" }} >

                        <h3 style={{ color: "#3eb8a5" }}>Education</h3>
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Bachelor of Technoogy in Computer Science
</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>Computer Science & Engineering is an academic program at many universities which comprises scientific and engineering aspects of computingCSE is also a term often used in Europe to translate the name of engineering informatics academic programs.</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2015-2018</h6>

                                <h4 style={{ fontWeight: "bold" }}>Diploma in Computer

</h4>
                                <h5>POLYTECHNIC COLLEGE , MASABTANK </h5>
                                <h6 style={{ color: "gray" }}>The course provides a basic understanding of computer science, engineering concepts and mathematical techniques</h6>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <img src={img} alt="" height="70%" width="70%" /> */}
                        {/* <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2014-2015</h6>

                                <h4 style={{ fontWeight: "bold" }}>ssc


</h4>
                                <h5>ZPHS HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div> */}
                        <hr />
                        {/* <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}> */}
                        {/* <img src={img} alt="" height="70%" width="70%" /> */}
                        {/* <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Computer Processing Systems/Computer Software

</h4>
                                <h5>VNR VJIET HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div>  */}
                        <br />
                        <br />
                        <h3 style={{ color: "#3eb8a5" }}>Experience</h3>

                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2020-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Full Stack Developer -Mern at Stablx </h4>
                                <h5>Secunderabad, Telangana
</h5>
                                <h6 style={{ color: "gray" }}>StablX is the best Digital Marketing Agency in Hyderabad, India. They offer reliable SEO Services that drive 20,00,000+ traffic on their client's website ranking 2,100+ keywords on Google and other search engines</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2019-2020</h6>

                                <h4 style={{ fontWeight: "bold" }}>Full Stack Developer -Mern at Tct Tralamo
</h4>
                                <h5>Secunderabad, Telangana</h5>
                                <h6 style={{ color: "gray" }}>Tralamo.com is an online travel portal providing a one stop travel and mobile payments solution to the customers. ----- Tralamo is a one-stop travel and mobile payments solutions to the customers</h6>
                            </div>
                            <hr />
                        </div>
                        <hr />
                        {/* <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
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
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2018-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>UI/UX Designer</h4>
                                <h5>Side Tech
</h5>
                                <h6 style={{ color: "gray" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                            </div>
                        </div> */}

                        <br />
                        <br />
                        <h3 style={{ color: "#3eb8a5" }}>Skills</h3>

                        <div className="row">
                            {/* <div className="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>REACT JS</h5>
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
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>NODE JS</h5>
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
                                        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>HTML
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
                            </div>*/}
                        </div>

                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>C Language &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90%</p>
                                <LinearProgress variant="determinate" value="90" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>C++
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;95%</p>
                                <LinearProgress variant="determinate" value="95" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>JAVA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70%</p>
                                <LinearProgress variant="determinate" value="70" />
                                <br />


                            </div>
                            <div className="col-md-6">
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>PYTHON &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85%</p>
                                <LinearProgress variant="determinate" value="85" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>REACT Js

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50%</p>
                                <LinearProgress style={{ color: "#3eb8a5" }} variant="determinate" value="50" />
                                <br />
                                <p style={{ fontSize: "15px", fontWeight: "bold" }}>NODE JS
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70%</p>
                                <LinearProgress variant="determinate" value="70" />
                                <br />


                            </div>
                        </div>
                        <br /><br />
                        <h3 style={{ color: "#3eb8a5" }}>Awards
</h3>

                        <br />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2020-2021</h6>

                                <h4 style={{ fontWeight: "bold" }}>Cracked TCS CodeVita-9 rank-1963




</h4>
                                <h5>TCS CodeVita-9</h5>
                                <h6 style={{ color: "gray" }}>TCS CodeVita has been proudly promoting the Programming-As-A-Sport culture among global students. CodeVita is a contest where individuals across the globe participate and compete to win the coveted 'World's Best Coder' title</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2019-2020</h6>

                                <h4 style={{ fontWeight: "bold" }}>Winner @ JHUB Hackathon



</h4>
                                <h5>
                                    St. Martin's Engineering College - Hyderabad</h5>
                                <h6 style={{ color: "gray" }}>The J-Hub at JNTUH will conduct on regular basis the Hackathon events based on the Challenges posed by the Industry and Startups for the stakeholders in the form of a league events</h6>
                            </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="row">
                            <div className="col-lg-1" style={{ alignContent: "right", textAlign: "right" }}>
                                <SchoolTwoToneIcon style={{ fontSize: "50px" }}></SchoolTwoToneIcon>
                            </div>
                            <div className="col-sm-10">
                                <h6 style={{ color: "#3eb8a5", textAlign: "left" }}>2019-2020</h6>

                                <h4 style={{ fontWeight: "bold" }}>Top Performer at Cyberabad Police Hackathon



</h4>
                                <h5> HYDERABAD</h5>
                                <h6 style={{ color: "gray" }}>Meet #WEHUB startups, part of the 2nd Incubation Cohort on how they navigated the #Pandemic We are working on being a unified physical platform to bring various intervention mechanisms to one place for #WomenEntrepreneurs in #Telangana & Across India</h6>
                            </div>
                        </div>
                        <hr />

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                    </div>
                </div>
            </div >
        );
    }
}

export default Resume;
