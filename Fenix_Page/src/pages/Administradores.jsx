import React from "react";
import Sidebar from "../componentes/SideBar";
import CardAdmin from '../componentes/CardAdmin'
import ContacUs from '../componentes/ContacUs'


function Administradores (){
    return(
        <div>
            <Sidebar/>
            <br />
            <CardAdmin/>
            <br />
            <ContacUs/>
        </div>
    )
}

export default Administradores