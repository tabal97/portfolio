import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';


class Projects extends Component {
    state = {
        activeTab: 0
    }
    render() {
        const { activeTab } = this.state;
        return (<div className="category-tabs">
            <Tabs activeTab={activeTab} onChange={tabId => {
                this.setState({ activeTab: tabId })
            }} ripple>
                <Tab>React</Tab>
                <Tab>React-Native</Tab>
                <Tab>Godot</Tab>
            </Tabs>
            <Grid >
                <Cell col={12}>
                    <div className="content">
                        {this.toggleCategories()}
                    </div>
                </Cell>
            </Grid>
        </div>);
    }
    toggleCategories() {
        const categories = { 0: this.react(), 1: this.reactNative(), 2: this.godot() }
        const { activeTab } = this.state;
        return (
            <div>
                {categories[activeTab]}
            </div>
        )

    }
    react() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>Mo-News-For-U</CardTitle>
                    <CardText>Full-Stack Reddit style news aggregation board. Articles can be voted on and discussed; with the
user being able to vote on comments.</CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tabal97/fe-mo-news-for-u" target="_blank">FE GitHub</Button>
                        <Button colored href="https://github.com/tabal97/be-mo-news-for-u" target="_blank">BE GitHub</Button>
                        <Button colored href="https://mo-news-for-u.herokuapp.com/api" target="_blank">API</Button>
                        <Button colored href="https://mo-news-for-u.netlify.com/" target="_blank">Website</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                    </CardMenu>
                </Card >
            </div>

        )
    }
    reactNative() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover" }}>StreetClues</CardTitle>
                    <CardText>Multiplayer app where the aim of the game is to
guess where you are on the map after being placed in a randomly generated location on Google
Streetview.</CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tabal97/StreetClues-fend" target="_blank">FE GitHub</Button>
                        <Button colored href="https://github.com/samhankin2/StreetClueBackEnd" target="_blank">BE GitHub</Button>
                        <Button colored href="https://docs.google.com/presentation/d/1mPXc0i_DO37t8TMhB2_At3bNZJZHOewG-5hn2PQEfQM/edit?usp=sharing" target="_blank">Presentation</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                    </CardMenu>
                </Card >
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover" }}>Pokedex</CardTitle>
                    <CardText>Pokedex is a fun to use app that allows the user to browse through all the known pokemon and find out more about their stats and abilities. </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tabal97/StreetClues-fend" target="_blank">FE GitHub</Button>
                        <Button colored href="https://drive.google.com/file/d/1f7BFdxu_7L9HlhtV3-VXydXTgojzyGvD/view?usp=sharing" target="_blank">Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                    </CardMenu>
                </Card >
            </div>
        )
    }
    godot() {
        return (<div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover" }}>Accessibility Centre</CardTitle>
                <CardText>4 Accessible Mini-games that can be played with an eye tracker and using voice commands- made as part of the ManMetHack2.0 Hackathon Challenge</CardText>
                <CardActions border>
                    <Button colored href="https://github.com/Zacxalot/AccessibilityCentre" target="_blank">GitHub</Button>
                    <Button colored href="https://devpost.com/software/accessibility-centre" target="_blank">DevPost</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
            </Card >
        </div>)
    }
}

export default Projects;