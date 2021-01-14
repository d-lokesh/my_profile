import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Typewriter1 extends Component {
    state = {}
    render() {
        return (
            <div style={{ font: "caption", color: "blue", fontSize: "30px" }}>
                <Typewriter style={{ color: "blue", font: "20" }}
                    onInit={(typewriter) => {

                        typewriter.typeString("I'm a Web designer.")
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(25)
                            .deleteChars(13)

                        typewriter.typeString("Developer.")
                            .pauseFor(25)
                            .deleteChars(10)

                        typewriter.typeString("Photographer.")
                            .pauseFor(25)
                            .deleteChars(13)
                        typewriter.typeString("Marketer.")
                            .pauseFor(25)
                            .deleteChars(9)

                        typewriter.typeString("Web Designer")





                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}

                />
            </div>
        );
    }
}

export default Typewriter1;