import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import "./Basics.scss";
    



function Basics() {
  
  // Data Type
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  // Type Conversion
  const [convert, setConvert] = useState("");
  const [conversion, setConversion] = useState("");

  // Operators
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("");

  // Condition
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  // Loop
  const [number, setNumber] = useState("");
  const [loop, setLoop] = useState("");

  // Data Type
  const checkType = () => {
    let input=value;

    if (input === "true") {
        input = true;
    } else if (input === "false") {
        input = false;
    } else if (input === "null") {
        input = null;
    } else if (input === "undefined") {
        input = undefined;
    } else if (!isNaN(input) && input !== "") {
        input = Number(input);
    }
    setType(typeof input);
  };

  // Type Conversion
  const convertValue = () => {
    let con=convert
    setConversion(
      `Number: ${Number(con)}
String: ${String(con)}
Boolean: ${Boolean(con)}`
    );
  };

  // Operators
   const calculate = () => {
    const first = Number(num1);
    const second = Number(num2);

    let result;

    switch (operator) {
      case "+":
        result = first + second;
        break;

      case "-":
        result = first - second;
        break;

      case "*":
        result = first * second;
        break;

      case "/":
        result = second !== 0 ? first / second : "Cannot divide by zero";
        break;

      case "%":
        result = first % second;
        break;

      default:
        result = "Invalid Operator";
    }

    setAnswer(result);
  };
  // If Else
  const checkAge = () => {
    if (age >= 18) {
      setMessage("Eligible to Vote");
    } else {
      setMessage("Not Eligible");
    }
  };

  // Loops
  const showLoop = () => {
    const num = Number(number);

    let forLoop=[];
    for (let i = 1; i <= num; i++) {
      forLoop.push(i);
    }

    let whileLoop=[];
    let i=1;
    while(i<=num){
        whileLoop.push(i);
        i++;
    }

    let dowhileLoop=[];
    let j=1;
    do{
        dowhileLoop.push(j);
        j++;
    }while(j<=num);

    const fruits = ["Apple", "Banana", "Orange"];

    let forOf = [];

    for (const fruit of fruits) {
      forOf.push(fruit);
    }

    const student = {
      name: "Vennela",
      age: 22,
      course: "React",
    };

    let forIn = [];

    for (const key in student) {
      forIn.push(`${key} : ${student[key]}`);
    }

    setLoop(`
    FOR : ${forLoop.join(", ")}
    WHILE : ${whileLoop.join(", ")}
    DO WHILE : ${dowhileLoop.join(", ")}
    FOR OF : ${forOf.join(", ")}
    FOR IN :${forIn.join("\n")}`);
  };

  return (
    <Paper className="card">
      <Typography variant="h4">
        JavaScript Basics
      </Typography>

      {/* Data Type */}

      <Typography variant="h6">
        Data Type
      </Typography>

      <TextField
        label="Enter Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button variant="contained" onClick={checkType}>
        Check
      </Button>

      <Typography component="pre" className="output">{type}</Typography>

      {/* Type Conversion */}

      <Typography variant="h6">
        Type Conversion
      </Typography>

      <TextField
        label="Enter Value"
        value={convert}
        onChange={(e) => setConvert(e.target.value)}
      />

      <Button variant="contained" onClick={convertValue}>
        Convert
      </Button>

      <Typography style={{ whiteSpace: "pre-line" }}>
        {conversion}
      </Typography>

      {/* Operators */}

      <Typography variant="h6">
        Operators
      </Typography>

      <TextField
        label="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <TextField
        label="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <TextField
        select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <MenuItem value="+">Addition</MenuItem>
        <MenuItem value="-">Subtraction</MenuItem>
        <MenuItem value="*">Multiply</MenuItem>
        <MenuItem value="/">Divide</MenuItem>
      </TextField>

      <Button variant="contained" onClick={calculate}>
        Calculate
      </Button>

      <Typography>{answer}</Typography>

      {/* If Else */}

      <Typography variant="h6">
        If Else
      </Typography>

      <TextField
        label="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <Button variant="contained" onClick={checkAge}>
        Check
      </Button>

      <Typography>{message}</Typography>

      {/* Loop */}

      <Typography variant="h6">
        For Loop
      </Typography>

      <TextField
        label="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <Button variant="contained" onClick={showLoop}>
        Show
      </Button>

      <Typography sx={{whiteSpace:"pre-line"}}>{loop}</Typography>
    </Paper>
  );
}

export default Basics;