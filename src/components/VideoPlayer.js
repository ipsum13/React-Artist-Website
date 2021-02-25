import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

export default class VideoPlayer extends React.Component {

    render() {

        return (

            <Container id="video">
                <Row>
                    <Col xs={12}>
                        <h1>Video</h1>
                        <h3>A Thousand Thorns - July 2020</h3>
                        <iframe width="100%" height="600" frameBorder="0" src="https://www.youtube.com/embed/146_yxeRn2o" />
                    </Col>
                </Row>
            </Container>
        );
    }
}
