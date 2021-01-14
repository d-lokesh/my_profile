import React, { Component } from 'react';
import MessageIcon from '@material-ui/icons/Message';



class Blog extends Component {
    state = {}
    render() {
        return (<div>

            <h2>Our Blog</h2>
            <br />



            <p style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/image_3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p style={{ fontWeight: "bold" }}>
                                    Why Lead Generation is Key for Business Growth</p>
                                <p style={{ color: "blue", fontWeight: "bold" }}>sept.12,2021 <span><a href="/">admin</a><MessageIcon style={{ height: "15px", wedth: "15px" }}></MessageIcon>3
                                </span></p>
                                <p style={{ color: "gray", fontSize: "12px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: " 18rem", }}>
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/image_1.jpg" class="card-img-top" alt="..." height="40%" />
                            <div class="card-body">
                                <p style={{ fontWeight: "bold" }}>
                                    Why Lead Generation is Key for Business Growth</p>
                                <p style={{ color: "blue", fontWeight: "bold" }}>sept.12,2021 <span><a href="/">admin</a><MessageIcon style={{ height: "15px", wedth: "15px" }}></MessageIcon>3
                                </span></p>
                                <p style={{ color: "gray", fontSize: "12px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src="https://preview.colorlib.com/theme/ronaldo/images/image_3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p style={{ fontWeight: "bold" }}>
                                    Why Lead Generation is Key for Business Growth</p>
                                <p style={{ color: "blue", fontWeight: "bold" }}>sept.12,2021 <span><a href="/">admin</a><MessageIcon style={{ height: "15px", wedth: "15px" }}></MessageIcon>3
                                </span></p>
                                <p style={{ color: "gray", fontSize: "12px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <br /><br />


            <div className="container-fluid" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/ronaldo/images/bg_1.jpg)`, textAlign: "center" }}>
                <br />
                <br />
                <br />
                <h2 style={{ color: "white" }}>I'm <sapan style={{ color: "green" }}>Available</sapan> for freelancing</h2>
                <p style={{ color: "white" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                <button style={{ borderRadius: "20px", backgroundColor: "#3eb8a5" }} type="button" class="btn ">Hire Me</button>
                <br /><br /><br />
            </div>

            <br /><br />
        </div >);
    }
}

export default Blog;