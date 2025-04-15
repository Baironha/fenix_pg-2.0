import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let user = null;
    try {
        const storedUser = localStorage.getItem("user");
        user = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error al leer localStorage:", error);
        localStorage.clear();
    }

    console.log("Usuario en PrivateRoute:", user); // 🛠 Verificación

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
