import React, { Component } from 'react'

// import ".../App.css"
//import brand from "../assets/logo.png"
class Nav extends Component {
    state = {}
    render() {
        return (
            <div>

                <div class="navbar  navbar-fixed-top navbar-light "  >
                    <div class="navbar-inner">

                        <nav class="navbar navbar-expand-lg   navbar-light bg-light fixed-top" >
                            <div class="container-fluid">
                                {/* <img src={brand} alt="" width="30px" height="30px" /> */}
                                <b> <a class="navbar-brand" style={{
                                    color: "#3eb8a5",
                                    marginLeft: "7px  "

                                }} href="#">Lokesh</a> </b>

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item" >
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">Home</a>

                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">About</a>
                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">Resume</a>

                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">Service</a>

                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">Projects</a>

                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">My blogs</a>

                                        </li>
                                        <li class="nav-item" style={{ color: "black" }}>
                                            <a style={{ color: "black" }} class="nav-link active" aria-current="page" href="#">Contact</a>

                                        </li>


                                        {/* <button class="float-md-right navbar-right btn btn-outline-warning my-2 my-sm-0" type="submit" style={{ marginLeft: "600px" }}>Apply Now</button> */}


                                    </ul>

                                </div>
                            </div>
                        </nav>


                    </div>
                </div>

            </div>
        );
    }
}

export default Nav;