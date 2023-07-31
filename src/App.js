import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PrescriptionsTable from './features/prescriptions/PrescriptionsTable';
import PrescriptionDetailPage from './pages/PrescriptionDetailPage';
import AccountPage from './pages/AccountPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPrescriptions } from './features/prescriptions/prescriptionsSlice';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPrescriptions());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='prescriptions' element={<PrescriptionsTable />}/>
          <Route path='prescriptions/:prescriptionId' element={<PrescriptionDetailPage />}/>
          <Route path='account' element={<AccountPage />} />
          <Route path='aboutus' element={<AboutPage />}/>
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
