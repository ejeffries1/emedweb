import { Card, CardTitle, Container, Col } from "reactstrap";
import PrescriptionCard from "../features/prescriptions/PrescriptionCard";
import { selectPrescriptionById } from "../features/prescriptions/prescriptionsSlice";
import { useParams } from "react-router-dom";


const PrescriptionDetailPage = () => {
    return <PrescriptionCard />
};

export default PrescriptionDetailPage;