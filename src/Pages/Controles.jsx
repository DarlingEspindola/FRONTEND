import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { esES } from "@mui/material/locale";
import { TextField } from "@mui/material";

/* {
  "fechaControl": "2023-09-03",		
  "especialidad": "traumatologia",
  "medico": "Claudio",
  "diagnostico": "fractura",
  "observaciones": "realizar radiografia", 	
  "notas": "receta calmantes"
  } */

function Formulario() {
  const [fechaControl, setFechaControl] = useState(new Date());
  console.log(fechaControl);
  console.log(fechaControl.toISOString().slice(0, 10));
  return (
    <div className="recuadro">
      <div className="containerControl" style={{ padding: "40px" }}>
        <form>
          <h2 className="TituloControl">Registro de Control</h2>
          <br></br>
          <div className="form-group">
            <LocalizationProvider dateAdapter={AdapterDayjs} locale={esES}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  className="colorFecha"
                  label="Fecha de Atención"
                  defaultValue={dayjs(new Date().toISOString().slice(0, 10))}
                  /* onChange={} */
                />
              </DemoContainer>
            </LocalizationProvider>

            <br></br>
            <div>
              <TextField
                fullWidth
                label="Especialidad de Atención"
                id="especialidad"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <br></br>

            <div>
              <TextField
                fullWidth
                label="Nombre del Médico"
                id="medico"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <br></br>
            <div>
              <TextField
                fullWidth
                label="Diagnóstico"
                id="diagnostico"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <br></br>
            <div>
              <TextField
                id="observaciones"
                label="Observaciones"
                multiline
                rows={5}
                style={{ backgroundColor: "white" }}
              />

              <TextField
                id="notas"
                label="Notas"
                multiline
                rows={5}
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>

          <br />
          <br />
          <div className="form-group">
            <label className="checkbox-inline">
              <input type="checkbox" defaultValue />
              Esta seguro de guardar la información
            </label>
          </div>
          <div className="form-group">
            <button type="submit" name="guardar" className="btn btn-default">
              Guardar
            </button>
            <br></br>
            <div className=""></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
