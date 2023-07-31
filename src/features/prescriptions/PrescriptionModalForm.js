import { Form, Formik, Field } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { postPrescription } from "./prescriptionsSlice";


const PrescriptionModal = () => {
    const [modalOpen=false, setModalOpen] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const prescription = {
            name: values.name,
            strength: values.strength,
            quantity: values.quantity,
            refills: values.refills,
            directions: values.directions,
            date: new Date(Date.now()).toISOString
        }
        console.log(prescription);
        dispatch(postPrescription(prescription));
        setModalOpen = false
    };

    return(
        <div>
        <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg"/>Add Prescription
        </Button>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => setModalOpen(false)}>Add Prescription</ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{
                        name: '',
                        strength: '',
                        quantity: Number,
                        refills: Number,
                        directions: ''
                    }}
                onSubmit={handleSubmit}
                >
                    <Form>
                        <FormGroup>
                    <Label htmlFor="name">Medication: </Label>
                    <Field name="name" className='form-control'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="strength">Strength: </Label>
                    <Field name="strength" className='form-control'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="quantity">Quantity: </Label>
                    <Field name="quantity" className='form-control'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="refills">Refills: </Label>
                    <Field name="refills" className='form-control'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="directions">Directions: </Label>
                    <Field name="directions" className='form-control'/>
                </FormGroup>
                <Button type='submit' color='primary'>Submit Prescription</Button>
            </Form>
        </Formik>
        </ModalBody>
        </Modal>
    </div>
    )
};

export default PrescriptionModal;