import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './Components/main';
import { Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link to="/">Portfolio</Link>} scroll>
          <Navigation>
            <Link to="/cv">CV</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Portfolio">
          <Navigation>
            <Link to="/cv">CV</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
