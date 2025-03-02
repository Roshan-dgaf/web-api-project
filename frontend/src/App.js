import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from './layouts/Header';
import ContactUs from './pages/ContactUs/contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Forgotpassword from './pages/ForgotPassword/Forgotpassword';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
