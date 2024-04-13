import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";

function App() {
  const [nombre, setNombre] = useState("");
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  return (
    <>
      <Dialog open={mostrarDialogo}>
        <DialogContent>Hola {nombre}! </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setMostrarDialogo(false)}>
            X
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        id="standard-basic"
        label="Ingrese su nombre"
        variant="standard"
        value={nombre}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNombre(event.target.value);
        }}
      />
      <Button variant="outlined" onClick={() => setMostrarDialogo(true)}>
        Enviar
      </Button>
    </>
  );
}

export default App;
