import { Card, CardTitle, Container } from "reactstrap";
//import PrescriptionCard from "../features/prescriptions/PrescriptionCard";


const PrescriptionDetailPage = ({ prescription }) => {
    return (
        <Card>
            <h2>{prescription.name}</h2>
        </Card>
    )
};

export default PrescriptionDetailPage;