import { configureStore } from '@reduxjs/toolkit';
import { prescriptionsReducer } from "../features/prescriptions/prescriptionsSlice";
import logger from 'redux-logger';
import { getDefaultNormalizer } from '@testing-library/react';
import { userReducer } from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        prescriptions: prescriptionsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

export default store;