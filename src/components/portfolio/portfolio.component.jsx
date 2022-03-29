import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio component</h1>
            <Container>
                <Row>
                    <Col><b>Ticker</b></Col>
                </Row>
                <Row>
                    <Col>Test</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;