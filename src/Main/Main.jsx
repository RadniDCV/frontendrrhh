import React from "react";
import {Button, ButtonGroup} from "@chakra-ui/react";
import {SettingsIcon,EditIcon, CalendarIcon, InfoIcon, CopyIcon} from "@chakra-ui/icons"
import "./style.css";
import { Link } from "react-router-dom";

function App() {
  return (
   <div className="body"> 
   <h1 className="menu">Menu Principal</h1>
   <ul>
        <li>
        <Button
            leftIcon={<SettingsIcon />}
            size='md'
            height='50px'
            width='200px'
            border='2px'
            borderColor='gree.500'
        >Configuracion</Button></li>
        <li>
        <Button
            leftIcon={<EditIcon />}
            size='md'
            height='50px'
            width='200px'
            border='2px'
            borderColor='gree.500'
        ><Link to={"empleados"}>Usuarios</Link></Button></li>
        <li>
        <Button
            leftIcon={<InfoIcon />}
            size='md'
            height='50px'
            width='200px'
            border='2px'
            borderColor='gree.500'
        >Estudiantes</Button></li>
        <li>
          <Button
            leftIcon={<CalendarIcon />}
            size='md'
            height='50px'
            width='200px'
            border='2px'
            borderColor='gree.500'
        >Calendario</Button></li>
        <li>
        <Button
            leftIcon={<CopyIcon />}
            size='md'
            height='50px'
            width='200px'
            border='2px'
            borderColor='gree.500'
        >Reportes</Button></li>
   </ul>
   </div>
  );
}

export default App;
