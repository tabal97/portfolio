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
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1rem" }}>A passionate professional individual seeking a new challenge as a full-stack developer; after recently graduating from the developer course at Northcoders.

</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <List>
                            <ListItem>
                                <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Aaron Paul</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;