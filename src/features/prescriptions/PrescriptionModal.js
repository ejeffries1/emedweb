import { Modal, ModalHeader, Card, Row, Col, Card } from "reactstrap";

const PrescriptionModal = ({prescription}) => {
        
    return (
        
        <Modal isOpen={Modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>{prescription.id}</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </ModalBody>
            </Modal>
            )
        }