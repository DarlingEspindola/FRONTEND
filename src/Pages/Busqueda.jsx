import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";

/* import { useDemoData } from "@mui/x-data-grid-generator";
import mysql from "mysql";
import dbConfig from "./dbConfig"; 
 */
const VISIBLE_FIELDS = [
  "fechaControl",
  "especialidad",
  "medico",
  "diagnostico",
  "observaciones",
  "notas",
];
export default function InitialFilters() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET utilizando Axios cuando el componente se monta
    axios
      .get("localhost:8082/controles/lista")
      .then((response) => {
        console.log(response.data);
        // Maneja la respuesta exitosa y actualiza el estado con los datos
        setRows(response.data);
      })
      .catch((error) => {
        // Maneja errores de la solicitud
        console.error("Error al obtener datos:", error);
      });
  }, []); // El segundo argumento asegura que esta función se ejecute solo cuando el componente se monta

  return (
    <div className="container" style={{ padding: "40px" }}>
      <div className="recuadro">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows} // Utiliza los datos del estado local
            columns={VISIBLE_FIELDS.map((field) => ({
              field,
              headerName: field.charAt(0).toUpperCase() + field.slice(1),
              width: 150,
            }))}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50]}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* const connection = mysql.createConnection({
    host: "jdbc:mysql://localhost:3306/grupo4?createDatabaseIfNotExist=true",
    user: "root",
    password: "admin1234",
    database: "grupo4",
  });

  connection.connect();

 
export default function InitialFilters() {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  export default function ControlsTable() {
    const [controls, setControls] = useState([]);

  return (
    <div className="container" style={{ padding: "40px" }}>
      <div className="recuadro">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            {...data}
            slots={{
              toolbar: GridToolbar,
            }}
            initialState={{
              ...data.initialState,
              filter: {
                ...data.initialState?.filter,
                filterModel: {
                  items: [
                    {
                      field: "rating",
                      operator: ">",
                      value: "2.5",
                    },
                  ],
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
 */
