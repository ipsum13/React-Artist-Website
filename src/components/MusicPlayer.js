import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BandCamp = {
    song1: 'https://bandcamp.com/EmbeddedPlayer/track=3148678427/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true',
    song2: 'https://bandcamp.com/EmbeddedPlayer/track=1470403563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
};

const style = {
    border: '0',
    width: '100%',
    height: '700px'
};

export default class MusicPlayer extends React.Component {

    render() {

        return (

            <Container id="music">
                <Row>
                    <Col xs={12} sm={12}>
                        <h1>Recordings</h1>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>I won't ask <i>- released October 6, 2020</i></h3>
                        <iframe style={style} src={BandCamp.song1} seamless>
                            <a href="https://keithpaluso.bandcamp.com/track/i-wont-ask-demo-version">i won't ask</a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Something Like Love <i>- released September 29, 2020</i></h3>
                        <iframe style={style} src={BandCamp.song2} seamless>
                            <a href="https://keithpaluso.bandcamp.com/track/something-like-love">Something Like Love</a>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        );
    }
}
