import React, { Component } from 'react';

import img from "../components/sky_bg.png"
import Navbar from "../components/navbars/navbar1"
import Navbar2 from "../components/navbars/navbar2"
import Typewriter from "../components/typewriter/typewriter"
import About from "../components/about/about"
import Resume from "../components/resume/resume"
import Service from "./stdservice/service"
import Project from ".//projects/project"
import Blog from "./blogs/blog"
import Contactme from "../components/contact/contactme"
import Footer from "./footer/footer"
class Home extends Component {
    state = { flag: 1 };

    componentDidMount() {

        document.addEventListener("scroll", () => {
            console.log(window.scrollY);
            const backgroundcolor = window.scrollY < 550 ? 1 : 2;

            this.setState({ flag: backgroundcolor });

        });
    }
    render() {
        return (
            <div className="App" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }} >

                {this.state.flag === 1 ? (
                    <Navbar></Navbar>

                ) : (
                        <div>
                            <Navbar2></Navbar2>
                        </div>
                    )}
                <div className="row" style={{ marginTop: "200px", paddingBottom: "284px" }}>
                    <div className="col-md-3"></div>
                    <div className="col-md 6">
                        <h5 style={{ textAlign: "center", color: "blue" }}>HEY! I AM</h5>
                        <h2 style={{ textAlign: "center", color: "black" }}>Donga Lokesh</h2>
                        <Typewriter></Typewriter>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <About id="about"></About>

                <Resume></Resume>
                <Service></Service>

                <br />
                <br />
                <br />

                <Project></Project>

                <Blog></Blog>


                <Contactme></Contactme>

                <Footer></Footer>



            </div>

        );
    }
}

export default Home;