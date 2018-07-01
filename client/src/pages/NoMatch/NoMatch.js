import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import zboard from "../../components/zBoard";

const NoMatch = () => (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <zboard>
                    <h1>404 Page Not Found</h1>
                    <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
                    </h1>
                </zboard>
            </Col>
        </Row>
    </Container>
);

export default NoMatch;
