import { Card, CardBody, CardHeader, Col, Container } from "reactstrap";
import { selectPrescriptionById } from "./prescriptionsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PrescriptionCard = () => {
    const { prescriptionId } = useParams();
    const prescription = useSelector(selectPrescriptionById(prescriptionId));

    return (
        <Container fluid style={{padding: 20, display: "flex", textAlign: "left"}}>
            <Col>
                <Card>
                    <CardHeader><h2>Prescription Number: {prescription.id}</h2></CardHeader>
                    <CardBody>
                        <h3>Medication: {prescription.name + " " + prescription.strength}</h3>
                        <h3>Quantity: {prescription.quantity}</h3>
                        <h3>Refills: {prescription.refills}</h3>
                        <h3>Directions: {prescription.directions}</h3>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    );
};

export default PrescriptionCard;