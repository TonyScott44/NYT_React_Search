import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import zBoard from "../../components/zBoard";

const NoMatch = () => (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <zBoard>
                    <h1>404 Page Not Found</h1>
                    <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
                    </h1>
                </zBoard>
            </Col>
        </Row>
    </Container>
);

export default NoMatch;
