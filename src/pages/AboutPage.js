import { Card, Container, Row, Col } from "reactstrap";

const AboutPage = () => {
    return (
        <Container padding>
            <Row>
                <Col>
                    <Card>
                        <h3>About Us</h3>
                        <p>At Emed we strive to give our users a smooth and great experience allowing for easy use and tracking of medication.</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;