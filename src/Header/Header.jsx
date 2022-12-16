import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  InfoIcon,
  CalendarIcon,
  CopyIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import "./style.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="header">
      {" "}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<SettingsIcon />} command="⌘T">
            Configuracion
          </MenuItem>
          <Link to={"empleados"}>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘E">
              Usuarios
            </MenuItem>
          </Link>
          <MenuItem icon={<InfoIcon />} command="⌘⇧N">
            Estudiantes
          </MenuItem>
          <MenuItem icon={<CalendarIcon />} command="⌘O">
            Calendario
          </MenuItem>
          <MenuItem icon={<CopyIcon />} command="⌘R">
            Reportes
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="botones">
        <div className="botn">
          <Button colorScheme={"green"}>
            <Link to={"/"}>Menu principal</Link>
          </Button>
        </div>
        <div className="botn">
          <Button colorScheme={"green"}>
            <Link to={"Login"}>Iniciar Sesion</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
