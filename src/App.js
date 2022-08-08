import "./App.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";

function App() {
  const [status, setStatus] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const detailHandleChange = (event) => {
    setValue(event.target.value);
  };

  const ariaLabel = { "aria-label": "description" };

  return (
    <div className="App">
      <Box component="form" noValidate autoComplete="off">
        <Input placeholder="Add todo" inputProps={ariaLabel} />

        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: grey[900] }}
        >
          <AddIcon style={{ position: "relative", right: "3px" }} />
          <p
            style={{
              margin: 0,
              padding: 0,
              position: "relative",
              top: "1px",
              fontSize: "13px",
            }}
          >
            Add
          </p>
        </Button>
      </Box>

      <div className="todos">
        <ul style={{ margin: 0, padding: 0 }}>
          <li>
            <span style={{ margin: 0, padding: 0 }}>タイトル</span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-static"
                label="detail"
                multiline
                rows={4}
                defaultValue=""
                value={value}
                onChange={detailHandleChange}
              />
            </Box>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={status}
                label="ステータス"
                onChange={handleChange}
              >
                <MenuItem value={"notStartedYet"}>未着手</MenuItem>
                <MenuItem value={"inProgress"}>進行中</MenuItem>
                <MenuItem value={"Completed"}>完了</MenuItem>
              </Select>
            </FormControl>

            <EditIcon />

            <DeleteIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
