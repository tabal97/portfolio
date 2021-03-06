import React, { Component } from 'react';
import Avatar from "./avatar.png"

class CV extends Component {
    state = {}
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <img src={Avatar} alt="avatar" style={{ height: "200px" }} />
                <h2 style={{ paddingTop: "2rem" }}>Mohamed El Tabal</h2>
                <h4>Junior Software Developer</h4>
                <a href="https://drive.google.com/file/d/1CzP5Y9dMVklXpMtZ3gIo95jgVCLEiVJQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                    <h4 style={{ color: "grey" }}>Access my CV</h4>
                </a>
            </div>
        );
    }
}

export default CV;