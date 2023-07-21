import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { Formik } from 'formik';

const PrescriptionModal = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                medication: '',
                strength: '',
                quantity: '',
                directions: '',
                refills: '',
            }}
            onSubmit={handleSubmit}
            >
        <div>
          <Button color="primary" className="float-right" onClick={toggle}>
            Add Prescription
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="medication">Medication Name:</Label>
                            <Input id="medication" name="medication"/>
                        </FormGroup>
                        <FormGroup>
                            <label for="strength">Strength:</label>
                            <Input id="strength"/>
                        </FormGroup>
                        <FormGroup>
                            <label for="quantity">Quantity</label>
                            <Input id="quantity" type="select" name="select">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>60</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label for="directions">Frequency</label>
                            <Input id="directions" type="select">
                                <option>QD</option>
                                <option>BID</option>
                                <option>TID</option>
                                <option>QD PC</option>
                                <option>QD AC</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label for="refills">Refills</label>
                            <Input id="refills" type="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Submit Prescription
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        </Formik>
      );
    };

export default PrescriptionModal;