import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ScrollLite from './ScrollLite.js';

const heroObj = {
    title: 'Keith Paluso',
    subtitle: 'From Park Ranger to internationally-touring singer, Keith Paluso\'s soulful voice has led him from the Tennessee Backcountry, to a contender on NBC\'s "The Voice," and beyond.'
};

const styles = {
    hero: {
        color: 'white',
        borderRadius: '0',
        textAlign: 'center',
        background: 'transparent',
        height: '100vh',
        display: 'flex',
      
    },
    content:{
        maxWidth: '50vw'
    },
    scroll:{
        position: 'relative',
        top: '5vh'
    }
};

export default class Hero extends React.Component {

    render() {

        return (

            <Jumbotron style={styles.hero} id="top">
                <div>
                    <h1 style={styles.h1}>{heroObj.title}</h1>
                    <h3 style={styles.h3}>{heroObj.subtitle}</h3>
                    <ScrollLite style={styles.scroll} id="music" speed={5} className="fa fa-arrow-down fa-2x bounce"></ScrollLite>
                </div>
            </Jumbotron>
        );
    }
}
