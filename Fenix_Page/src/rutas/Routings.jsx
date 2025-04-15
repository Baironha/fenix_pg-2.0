import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrarsePage from '../pages/RegistrarsePage'
import Administradores from '../pages/Administradores';
import CampusVirtualFenix from '../pages/CampusVirtualFenix';
import GestionUsuPage from '../pages/GestionUsuPage';
import GestionTrabajadores from '../pages/GestionTrabajadores'


/* PAGINAS ESTUDIANTILES */
import EduAdminNegociosPage from '../pages/EduAdminNegociosPage';
import EduInflationPage from '../pages/EduInflationPage'
import EduDataScientsPage from '../pages/EduDataScientsPage'
import EduEmpleabilidadPage from '../pages/EduEmpleabilidadPage';
import Ejemplo from '../pages/ejemplo';
import GestionSociosPage from '../pages/GestionSociosPage'


/* Importar la ruta protegida */
import PrivateRoute from './PrivateRoute';
import AnalisisDtPage from '../pages/AnalisisDtPage';

function Routing() {


    return (
        <div>
            <Router>
                <Routes>

                                    {/* Paginas de usuarios */}
                                    <Route path="/" element={<Home/>}/>{/* HOME */}
                                    <Route path="/login" element={<LoginPage/>}/>   {/* LOGIN */}
                                    <Route path="/Registrarse" element={<RegistrarsePage/>}/>{/* REGISTER */}
                                    <Route path="/AnalisisDt" element={<PrivateRoute> <AnalisisDtPage/></PrivateRoute>}/>{/* REGISTER */}

                                    {/* Paginas educativa */}
                                    <Route path="/Campus" element={<CampusVirtualFenix/>}/>
                                    <Route path="/EduAdmin" element={<EduAdminNegociosPage/>}/>
                                    <Route path="/EduEmpleabilidad" element={<EduEmpleabilidadPage/>}/>
                                    <Route path="/EduEconomia" element={<EduInflationPage/>}/>
                                    <Route path="/EduDtScients" element={<EduDataScientsPage/>}/>
                                    <Route path="/Ejemplo" element={<Ejemplo/>}/>

                                    {/* Páginas ADMINISTRATIVAS protegidas */}
                                    <Route path="/Admin" element={<PrivateRoute><Administradores /></PrivateRoute>} />
                                    <Route path="/GestionUsu" element={<PrivateRoute><GestionUsuPage /></PrivateRoute>} />
                                    <Route path="/GestionTrabajadores" element={<PrivateRoute><GestionTrabajadores /></PrivateRoute>} />
                                    <Route path="/GestionSocios" element={<PrivateRoute><GestionSociosPage /></PrivateRoute>} />

                            
                                    
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

