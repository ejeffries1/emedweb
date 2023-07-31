import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { PRESCRIPTIONS } from '../../app/shared/oldData/PRESCRIPTIONS';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchPrescriptions = createAsyncThunk(
    'prescriptions/fetchPrescriptions',
    async () => {
        const response = await fetch(baseUrl + 'prescriptions');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postPrescription = createAsyncThunk(
    'prescriptions/postPrescriptions',
    async(prescription, { dispatch }) => {
        const response = await fetch(baseUrl + 'prescriptions', {
            method: 'POST',
            body: JSON.stringify(prescription),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(addPrescription(data));
    });

const initialState = {
    prescriptionsArray: [],
    isLoading: true,
    errMsg: ''
};

const prescriptionsSlice = createSlice({
    name: 'prescriptions',
    initialState,
    reducers: {
        addPrescription: (state, action) => {
            console.log('addPrescription action.payload', action.payload);
            console.log('addPrescription state.prescriptionsArray', state.prescriptionsArray);
            const newPrescription = {
                id: state.prescriptionsArray.length + 1,
                ...action.payload
            };
            state.prescriptionsArray.push(newPrescription);
        }
    },
    extraReducers: {
        [fetchPrescriptions.pending]: (state) => {
            state.isLoading = true;         
        },
        [fetchPrescriptions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.prescriptionsArray = (action.payload);
        },
        [fetchPrescriptions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postPrescription.rejected]: (state, action) => {
            alert(
                'Your prescription could not be posted\nError: ' + (action.error ? action.error.message : 'Fetch failed')
            );
        }
    }
});

export const prescriptionsReducer = prescriptionsSlice.reducer;

export const { addPrescription } = prescriptionsSlice.actions;

export const selectAllPrescriptions = (state) => {
    return state.prescriptions.prescriptionsArray;
};

export const selectPrescriptionById = (id) => (state) => {
    return state.prescriptions.prescriptionsArray.find(
        (prescription) => prescription.id === parseInt(id)
    );
};
