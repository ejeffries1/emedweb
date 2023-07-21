import PrescriptionModal from "../features/prescriptions/PrescriptionModalForm";
import PrescriptionsMedTable from "../features/prescriptions/PrescriptionsMedTable";


const HomePage = () => {
    return (
        <>
        <PrescriptionsMedTable/>
        <PrescriptionModal />
        </>
    );
}

export default HomePage;