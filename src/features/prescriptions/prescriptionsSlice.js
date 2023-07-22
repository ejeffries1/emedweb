import { PRESCRIPTIONS } from '../../app/shared/PRESCRIPTIONS';

export const selectAllPrescriptions = () => {
    return PRESCRIPTIONS;
};

export const selectPrescriptionById = (id) => {
    return PRESCRIPTIONS.find(
        (prescription) => prescription.id === parseInt(id)
    );
};
