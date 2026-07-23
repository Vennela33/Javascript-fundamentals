import { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";

function Functions() {
    const [name,setName]=useState("");
    const [numbers,setNumbers]=useState("");
  const [result, setResult] = useState("");

  // Function Declaration
  function greet() {
    setResult("Hello " + name);
  }

  // Function Expression
  const square = function () {
    setResult(Number(name) * Number(name));
  };

  // Arrow Function
  const add = () => {
    const nums=numbers.split(",");
    let sum=0;
    for (let num of nums){
        sum+=Number(num);
    }
    setResult(sum);
  };

  // Default Parameter
  function welcome(name = "Guest") {
    setResult("Welcome " + name);
  }

  // Rest Parameter
  function total(...numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    setResult(sum);
  }

  // Callback
  function display(callback) {
    callback();
  }

  // Closure
  function outer() {
    let message = "I am Closure";
    function inner() {
      setResult(message);
    }
    inner();
  }

  // this Keyword
  const student = {
    name: "Vennela",
    show() {
      setResult(this.name);
    },
  };

  return (
    <Paper sx={{ p: 3 }} className="container">
      <Typography variant="h4">Functions</Typography>
      <TextField 
      label="Enter Name or Number"
      value={name}
      fullWidth
      onChange={(e) => setName(e.target.value)}/>

      <Button variant="contained" onClick={() => greet()}>Function Declaration</Button>

      <Button variant="contained" onClick={() => square()}>Function Expression</Button>

      <Button variant="contained" onClick={() => welcome()}>Default parameters</Button>

      <TextField
        label="Enter array numbers"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />

      <Button variant="contained" onClick={() => add()}> Function Arrow</Button>

      <Button variant="contained" onClick={() => total(10,20,30)}>Rest parameters</Button>

      <Button variant="contained" onClick={() => display(() => setResult("Callback"))}>
        Callback
      </Button>

      <Button variant="contained" onClick={outer}>Closure</Button>

      <Button variant="contained" onClick={() => student.show()}>this keyword</Button>

      <Typography mt={2}>{result}</Typography>
    </Paper>
  );
}

export default Functions;