import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from "./avatar.png"

class Home extends Component {
    state = {}
    render() {
        return (
            <div style={{ width: '100 %', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src={Avatar} alt="male-avatar" className="avatar-img" />
                        <h1 className="header-home">Mohamed El Taball</h1>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | React | React-Native | JavaScript | SQL | Express | NodeJS</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/mohamed-el-tabal-3a061a186/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/tabal97" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://instagram.com/tabal97" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;