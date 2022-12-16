import React, { useState, useMemo } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Button,
} from "@chakra-ui/react";
import "./style.css";
import Header from "../Header/Header";
import countryList from "react-select-country-list";
import Select1 from "react-select";


function App() {
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return (
    
    <div className="formulario">
    <Header />
    <h1 className="titulo">Datos del personal</h1>
      <FormControl>
        <div className="datper">
          <div>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Segundo Nombre</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Apellido Paterno</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Apellido Materno</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Cargo</FormLabel>
            <Input type="text" width={"320px"} />
          </div>
          <div>
            <FormLabel>Departamento</FormLabel>
            <Input type="text" width={"320px"} />
          </div>
          <div>
            <FormLabel>Sucursal</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Celular</FormLabel>
            <Input type="tel" placeholder="Numero de celular" width={"300px"} />
          </div>
          <div>
            <FormLabel>Nro. telf. Casa</FormLabel>
            <Input type="tel" placeholder="Numero de celular" width={"300px"} />
          </div>
          <div>
            <FormLabel>Correo</FormLabel>
            <Input type="email" width={"300px"} />
          </div>
          <div>
            <FormLabel>Pais</FormLabel>
            <Select1 width={"450px"} options={options} value={value} onChange={changeHandler} />
          </div>
          <div>
            <FormLabel>Ciudad</FormLabel>
            <Select placeholder="Seleccionar Ciudad" width={"200px"}>
              <option>La Paz</option>
              <option>Santa Cruz</option>
              <option>Cochabamba</option>
              <option>Sucre</option>
              <option>Oruro</option>
              <option>Potosi</option>
              <option>Tarija</option>
              <option>Beni</option>
              <option>Pando</option>
            </Select>
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Direccion Casa</FormLabel>
            <Input type="text" width={"320px"} />
          </div>
          <div>
            <FormLabel>Direccion Oficina</FormLabel>
            <Input type="text" width={"320px"} />
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Fecha de ingreso</FormLabel>
            <Input type="date" width={"200px"} />
          </div>
          <div>
            <FormLabel>Modalidad de contrato</FormLabel>
            <Select placeholder="Seleccionar " width={"300px"}>
              <option>Tiempo indefnido</option>
              <option>A plazo fijo</option>
              <option>Por temporada</option>
              <option>Por realizacion de obra o servicio</option>
              <option>Condicional o eventual</option>
            </Select>
          </div>
          <div>
            <FormLabel>Fecha de retiro</FormLabel>
            <Input type="date" width={"300px"} />
          </div>
          <div>
            <FormLabel>Motivo de retiro</FormLabel>
            <Select placeholder="Seleccionar " width={"300px"}>
              <option>Retiro voluntario del trabajador</option>
              <option>Vencimiento de contrato</option>
              <option>Conclusión de obra</option>
              <option>
                Perjuicio material causado con intención en los instrumentos de
                trabajo
              </option>
              <option>Revelación de secretos industriales</option>
              <option>
                Omisiones o imprudencias que afecten a la seguridad o
                higieneindustrial
              </option>
              <option>
                Inasistencia injustificada de más de seis días continuos
              </option>
              <option>Incumplimiento total o parcial del convenio.</option>
              <option>Robo o hurto por el trabajador</option>
              <option>Retiro Forsozo</option>
            </Select>
          </div>
          <div>
            <FormLabel>Genero</FormLabel>
            <Select placeholder="Seleccionar Genero" width={"300px"}>
              <option>Hombre</option>
              <option>Mujer</option>
              <option>No definido</option>
            </Select>
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Fecha de nacimiento</FormLabel>
            <Input type="date" width={"200px"} />
          </div>
          <div>
            <FormLabel>Pais de nacimiento</FormLabel>
            <Select1 width={"450px"} options={options} value={value} onChange={changeHandler} />
          </div>
          <div>
            <FormLabel>Estado civil</FormLabel>
            <Select placeholder="Seleccionar" width={"200px"}>
              <option>Soltero</option>
              <option>Casado</option>
              <option>Divorsiado</option>
              <option>Viudo</option>
            </Select>
          </div>
          <div>
            <FormLabel>Tipo de documento</FormLabel>
            <Select placeholder="Seleccionar" width={"150px"}>
              <option>CI</option>
              <option>PASAPORTE</option>
              <option>RUN</option>
              <option>Otro</option>
            </Select>
          </div>
          <div>
            <FormLabel>Cedula de identidad</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Extension</FormLabel>
            <Select placeholder="Seleccionar" width={"100px"}>
              <option>LP</option>
              <option>SC</option>
              <option>CB</option>
              <option>SU</option>
              <option>PO</option>
              <option>TA</option>
              <option>BE</option>
              <option>OR</option>
              <option>PA</option>
            </Select>
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Pasaporte</FormLabel>
            <Input type="text" width={"200px"} />
          </div>
          <div>
            <FormLabel>Nro. Cuenta bancario</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Banco</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>AFP a la que aporta</FormLabel>
            <Select placeholder="Seleccionar AFP" width={"300px"}>
              <option>Futuro</option>
              <option>Prevision</option>
            </Select>
          </div>
          <div>
            <FormLabel>Jubilado</FormLabel>
            <Select placeholder="Tipo de jubilado" width={"300px"}>
              <option>Si</option>
              <option>No</option>
            </Select>
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Esquema contable</FormLabel>
            <Input type="text" width={"200px"} />
          </div>
          <div>
            <FormLabel>Socio de negocio</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Codigo NUA</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
          <div>
            <FormLabel>Fecha de indemnizacion</FormLabel>
            <Input type="date" width={"300px"} />
          </div>
          <div>
            <FormLabel>Caja de Salud</FormLabel>
            <Select placeholder="Seleccionar" width={"300px"}>
              <option>Caja Nacional de salud</option>
              <option>Caja Petrolera de salud</option>
              <option>Caja de salud de caminos</option>
              <option>Caja Bancaria de Salud</option>
              <option>Caja de Salud de la Banca Privada</option>
              <option>Caja de Salud Cordes</option>
              <option>Seguro Social Universitario</option>
              <option>Corporacion del Seguro Social Militar</option>
              <option>Seguro Integral de Salud</option>
            </Select>
          </div>
        </div>
        <div className="datper">
          <div>
            <FormLabel>Clasificacion Laboral</FormLabel>
            <Select placeholder="Seleccionar" width={"300px"}>
              <option>Ocupacion de direccion en la administracion</option>
              <option>
                Ocupacion de profesionales cientificos e intelectuales
              </option>
              <option>Ocupacion de tecnicos y profesionales de apoyo</option>
              <option>Empleados de oficina</option>
              <option>
                Trabajadores de los servicios y vendedores del comercio
              </option>
              <option>
                Productores y trabajadores en la agricultura pecuaria
              </option>
              <option>
                Trabajadores de la industria extractiva construccion
              </option>
              <option>Operadores de instalaciones y maquinarias</option>
              <option>Trabajadores no calificados</option>
              <option>Fuerzas armadas</option>
            </Select>
          </div>
          <div>
            <FormLabel>Tipo de contrato</FormLabel>
            <Select placeholder="Seleccionar" width={"200px"}>
              <option>Escrito</option>
              <option>Verbal</option>
            </Select>
          </div>
          <div>
            <FormLabel>Persona con discapacidad</FormLabel>
            <Select placeholder="Seleccionar" width={"300px"}>
              <option>Si</option>
              <option>No</option>
            </Select>
          </div>
          <div>
            <FormLabel>Tutor de persona con discapacidad</FormLabel>
            <Select placeholder="Seleccionar" width={"300px"}>
              <option>Si</option>
              <option>No</option>
            </Select>
          </div>
          <div>
            <FormLabel>Codigo de RCIVA</FormLabel>
            <Input type="text" width={"300px"} />
          </div>
        </div>
        <div className="datper">
          <div>
          <FormLabel>Forma de pago</FormLabel>
          <Select placeholder="Seleccionar" width={"200px"}>
            <option>Transferencia</option>
            <option>Cheque</option>
            <option>Efectivo</option>
          </Select>
          </div>
          <div>
          <FormLabel>Profesion</FormLabel>
          <Input type="text" width={"300px"} />
          </div>
          <div>
          <FormLabel>Licencia de conducir</FormLabel>
          <Select placeholder="Seleccionar" width={"300px"}>
            <option>P</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </Select>
          </div>
          <div>
          <FormLabel>Persona de contacto</FormLabel>
          <Input type="text" width={"300px"} />
          </div>
          <div>
          <FormLabel>Telefono de persona de contacto</FormLabel>
          <Input type="tel" width={"300px"} />
          </div>
          <div>
          <FormLabel>Ubicacion</FormLabel>
          <Input type="text" width={"300px"} />
          </div>
        </div>
        <Button mt={4} colorScheme="green" type="submit">
          Guardar
        </Button>
      </FormControl>

    </div>
  );
}

export default App;
