import { Card, Container } from "reactstrap";

const PrescriptionCard = ({prescription}) => {
    return (
        <Container fluid>
            <Card>
                <Card.Title>{prescription.name}</Card.Title>
            </Card>
        </Container>
        
    )
}

export default PrescriptionCard;