import { DialogContent } from '@material-ui/core'
import "../stdservice/s.css";
import React, { Component } from 'react';
import "../projects/project.css"
import work from "../projects/assets/work1.jpg";
import work2 from "../projects/assets/work2.jpg";
import work3 from "../projects/assets/work3.jpg";
import work4 from "../projects/assets/work4.jpg";

import work5 from "../projects/assets/work5.jpg";
import work6 from "../projects/assets/work6.jpg";

import safe from "../projects/assets/safe.jpg";
import safe1 from "./assets/safe1.png"
import oprp from "./assets/oprp.jpg"
import oprp1 from "./assets/oprp1.jpg"
import edu from "./assets/edu.jpeg";
import edu1 from "./assets/edu1.jpg";






class Project extends Component {

    state = {
        "h1": 2,
        "h2": 2,
        "h3": 2,
        "h4": 2,
        "h5": 2,
        "h6": 2,
    }


    handleMouseHover = async (value) => {

        // console.log(value);

        var val = value


        this.setState({ val: 2 });
        console.log(this.state.val, "leave");
    }
    handleMouseHovere = async (value) => {

        // console.log(value);
        var val = value

        // console.log(val, this.state.val, typeof (val), typeof (this.state.val), "value")
        this.setState({ val: 1 });
        console.log(this.state.val, "enter");

    }

    // toggleHoverState(state) {
    //     return {
    //         isHovering: !state.isHovering,
    //     };
    // }
    // onMouseEnter(value) {
    //     console.log(value);
    // }
    // onMouseLeave(va) {
    //     console.log(va);
    // }

    render() {
        return (
            <div>
                <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>Projects</h1>
                <br />
                <p style={{ color: "gray" }}>

                    Projects I Developed
<br />
                    <br />
                    <br />
                    <div className="row">
                        {
                            this.state.h1 === 1 ? (<div className="col-lg-4" value={1} style={{ textAlign: "center", color: '#fff', background: `url(${safe})`, backgroundColor: "blue", opacity: "0.5" }} onMouseLeave={() => { this.setState({ h1: 2 }) }}>
                                <h5 style={{ marginTop: "100px" }}>SAFE BUY</h5>

                                <h6 >Online Shopping Portal</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${safe})` }} onMouseEnter={() => { this.setState({ h1: 1 }) }}
                            >
                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>



                            </div>)}
                        {
                            this.state.h3 === 1 ? (<div className="col-lg-4" style={{ textAlign: "center", color: '#fff', background: `url(${edu})`, backgroundColor: "blue", opacity: " 0.5" }} onMouseLeave={() => { this.setState({ h3: 2 }) }}
                            >                                <h5 style={{ marginTop: "100px" }}>Exam Portal</h5>

                                <h6 >Online Exam Management System</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${edu})` }} onMouseEnter={() => { this.setState({ h3: 1 }) }}>

                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>


                            </div>)}
                        {
                            this.state.h5 === 1 ? (<div className="col-lg-4" style={{ textAlign: "center", color: '#fff', background: `url(${oprp1})`, backgroundColor: "blue", opacity: "0.5" }} onMouseLeave={() => { this.setState({ h5: 2 }) }}
                            >                                      <h5 style={{ textAlign: "center", top: "40%", marginTop: "100px" }}>Digitalized Medcial Records</h5>

                                <h6 >Online Medical Report portal</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${oprp1})` }} onMouseEnter={() => { this.setState({ h5: 1 }) }}>

                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>


                            </div>)}



                        {
                            this.state.h4 === 1 ? (<div className="col-lg-4" style={{ textAlign: "center", color: '#fff', background: `url(${safe1})`, backgroundColor: "blue", opacity: " 0.5" }} onMouseLeave={() => { this.setState({ h4: 2 }) }}
                            >                                 <h5 style={{ marginTop: "100px" }}>SAFE BUY</h5>

                                <h6 >Online Shopping Portal</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${safe1})` }} onMouseEnter={() => { this.setState({ h4: 1 }) }}>

                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>


                            </div>)}
                        {
                            this.state.h6 === 1 ? (<div className="col-lg-4" style={{ textAlign: "center", color: '#fff', background: `url(${edu1})`, backgroundColor: "blac", opacity: "0.7", color: "gary" }} onMouseLeave={() => { this.setState({ h6: 2 }) }}
                            >                                 <h5 style={{ marginTop: "100px" }}>Exam Portal</h5>

                                <h6 >Online Exam Management System</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${edu1})` }} onMouseEnter={() => { this.setState({ h6: 1 }) }}>

                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>


                            </div>)}


                        {
                            this.state.h2 === 1 ? (<div className="col-lg-4" style={{ textAlign: "center", color: '#fff', background: `url(${oprp})`, backgroundColor: "blue", opacity: "0.5" }} onMouseLeave={() => { this.setState({ h2: 2 }) }}
                            >                                 <h5 style={{ marginTop: "100px" }}>Digitalized Medcial Records</h5>

                                <h6 >Online Medical Report portal</h6>


                            </div>) : (<div className="col-lg-4" style={{ color: '#fff', background: `url(${oprp})` }} onMouseEnter={() => { this.setState({ h2: 1 }) }}>

                                <h6 style={{ margin: "100px" }}>&nbsp;</h6>


                            </div>)}


                    </div>

                </p>



                <br />
                <br />
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <div class="card shadow-custom">

                                <div class="card-body" style={{ margin: "4px" }}>
                                    <h5 style={{ color: "#3eb8a5", fontWeight: "bold", fontSize: "30px" }}>05</h5>
                                    <h5>Awards</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card shadow-custom">

                                <div class="card-body" style={{ margin: "4px" }}>
                                    <h5 style={{ color: "#3eb8a5", fontWeight: "bold", fontSize: "30px" }}>04</h5>
                                    <h5>Complete Projects
</h5>
                                </div>
                            </div>
                        </div><div className="col-md-3">
                            <div class="card shadow-custom">

                                <div class="card-body" style={{ margin: "4px" }}>
                                    <h5 style={{ color: "#3eb8a5", fontWeight: "bold", fontSize: "30px" }}>05</h5>
                                    <h5>Hackathons
</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card shadow-custom">

                                <div class="card-body" style={{ margin: "4px" }}>
                                    <h5 style={{ color: "#3eb8a5", fontWeight: "bold", fontSize: "30px" }}>02</h5>
                                    <h5>Internships</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br /><br />
            </div >
        );
    }
}

export default Project;