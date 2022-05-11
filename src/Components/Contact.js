import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Profile from "./profile.jpeg";

class Contact extends Component {
    state = {}
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mohamed El Tabal</h2>
                        <img src={Profile} className="profile-img" alt="profile" />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1rem" }}>A passionate professional individual with a solid background in web development, always on the lookout for new challenges.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <List className="contact-list">
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Nanum Gothic' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    +44 7930303748
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Nanum Gothic' }}>
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                    mr.tabal@yahoo.co.uk
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Nanum Gothic' }}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    linkedin.com/in/tabal97
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;