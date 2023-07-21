import { Container, Table } from "reactstrap";
import { selectAllPrescriptions } from "./prescriptionsSlice";

const PrescriptionsMedTable = () => {
    const handleRowClick = (prescriptionID) => {
        console.log('row clicked', prescriptionID)
    };

    const prescriptions = selectAllPrescriptions();
    return (
        <Container fluid>
        <Table className="table table-hover row-clickable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id} onClick={() => handleRowClick(prescription.id)}>
                <td>{prescription.id}</td>
                <td>{prescription.name + " " + prescription.strength}</td>
                <td>{prescription.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
      );
};

export default PrescriptionsMedTable;