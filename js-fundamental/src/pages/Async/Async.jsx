import { useState } from "react";
import { Paper, Typography, Button,TextField } from "@mui/material";
import "./Async.scss";

function Async() {
  const [result, setResult] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [post,setPost]=useState(null);
  // Callback
  const callbackExample = () => {
    setTimeout(() => {
      setResult("Callback Executed");
    }, 2000);
  };

  // Promise
  const promiseExample = () => {
    const promise = new Promise((resolve) => {
      resolve("Promise Resolved");
    });

    promise.then((data) => {
      setResult(data);
    });
  };

  // Async Await
  const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    setResult(data.name);
  } catch (error) {
    setResult(error.message);
  }
};

const postData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      }
    );

    const data = await response.json();

    setResult(JSON.stringify(data, null, 2));
  } catch (error) {
    setResult(error.message);
  }
};

  return (
    <Paper className="container">
        <Typography variant="h4">Async JavaScript</Typography>
        <Button variant="contained" onClick={callbackExample}>
            Callback
        </Button>

        <Button variant="contained" onClick={promiseExample}>
            Promise
        </Button>

        <Button variant="contained" onClick={getData}>
            GET Request
        </Button>

        <TextField
        label="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        />

        <TextField
        label="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        />

        <Button variant="contained" onClick={postData}>
            POST Request
        </Button>

      <Typography>{result}</Typography>
    </Paper>
  );
}

export default Async;