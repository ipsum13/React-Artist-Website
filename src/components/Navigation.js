import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItemScroll from './NavItemScroll.js';
import ScrollLite from './ScrollLite.js';

const navObj = {
    title: 'KP',
    subtitle: 'I’m just here to write songs and watch birds.',
    logo: 'images/logo-transparent.png',
    navStyle: {
        fontSize: '1em',
        color: 'white',
        marginTop: '16px',
        float: 'right'
    },
    brandStyle: {
        color: 'white',
        fontSize: '1.4em'
    },
    linkStyle: {
      marginRight: '16px'
    }
};

export default class Navigation extends React.Component {

    render() {

        return (

            <Navbar expand bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="bungee white" style={navObj.brandStyle}>
                    {navObj.title}
                </Navbar.Brand>
                <Nav className="mr-auto" style={navObj.navStyle}>
                    <Nav.Link
                        href="https://www.facebook.com/KeithPalusoMusic/"
                        target="_blank"
                        alt="Facebook"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-facebook white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.youtube.com/channel/UCYqAMqg2ehQFtQfUXMD3zRQ"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-youtube white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.instagram.com/thisisrangerkeith/?hl=en"
                        target="_blank"
                        alt="Instagram"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-instagram white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://twitter.com/keithpaluso"
                        target="_blank"
                        alt="Twitter"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-twitter white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://open.spotify.com/artist/3hngoVzOQpWOq3eRAI20YM"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-spotify white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://keithpaluso.bandcamp.com/"
                        target="_blank"
                        alt="Bandcamp"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-bandcamp white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
