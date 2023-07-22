import { Container, ModalHeader, Table } from "reactstrap";
import { selectAllPrescriptions, selectPrescriptionById } from "./prescriptionsSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrescriptionsTable = () => {
    const navigate = useNavigate();

    const handleRowClick = (prescriptionId) => {
       navigate(`/prescriptions/${prescriptionId}`);
    };

    const prescriptions = selectAllPrescriptions();
    return (
        <Container fluid>
        <Table className="table table-hover row-clickable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id} onClick={() => handleRowClick(prescription.id)}>
                <td>{prescription.id}</td>
                <td>{prescription.name + " " + prescription.strength}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
      );
}

export default PrescriptionsTable;