import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Home from './pages/Home';
import Panel from './pages/Panel';

const App = () => {


    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/register" element={<Register />} />
                {/* {isAuth && <Route path="/panel" element={<Panel />} />}
                {!isAuth && <Route path="/login" element={<Login />} />} */}
                <Route path="/login" element={<Login />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;

