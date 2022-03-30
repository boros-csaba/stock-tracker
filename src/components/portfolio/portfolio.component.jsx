import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = ({portfolioItems}) => {
    return (
        <div>
            <h1>Portfolio component</h1>
            <Container>
                <Row>
                    <Col><b>Ticker</b></Col>
                    <Col><b>Qty</b></Col>
                    <Col><b>Purchase Price</b></Col>
                    <Col><b>Purchase Date</b></Col>
                </Row>
                {portfolioItems.map(item =>
                    <Row>
                        <Col>{item.ticker}</Col>
                        <Col>{item.quantity}</Col>
                        <Col>{item.purchasePrice} {item.currency}</Col>
                        <Col>{item.purchaseDate}</Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default Portfolio;