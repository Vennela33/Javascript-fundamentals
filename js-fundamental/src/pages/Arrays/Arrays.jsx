import { useState } from "react";
import { Paper, Typography, Button, Box,TextField } from "@mui/material";
import "./Arrays.scss";


function Arrays() {
    const [result, setResult] = useState("");
    const [fruit, setFruit] = useState("");
    const [student,setStudent]=useState(null);
    const [objresult,setObjresult]=useState("");
    const [items,setItems]=useState(["Apple","Banana"]);
    const [originalitems,setOriginalitems]=useState(["Apple", "Banana"]);
    const [form, setForm] = useState({
  name: "",
  age: "",
  course: "",
    city:"",
    state:"",
});
    const numbers = [10, 20, 30, 40];
    const nestedArray = [1, 2, [3, 4], [5, 6]];
    

    const pushItem = () => {
        if (fruit.trim() === "") return;

        const arr=[...originalitems];
        arr.push(fruit);

        setItems(arr);
        setOriginalitems(arr);
        setFruit("");
        
    };

    const popItem = () => {
        const arr = [...originalitems];
        arr.pop();
        setItems(arr);
        setOriginalitems(arr);
    };

    const shiftItem = () => {
        const arr = [...originalitems];
        arr.shift();
        setItems(arr);
    };

    const unshiftItem = () => {
        if (fruit.trim() === "") return;

        const arr = [...originalitems];
        arr.unshift(fruit);
        setItems(arr);
        setFruit("");
    };

    const sliceItem = () => {
        setResult(originalitems.slice(1, 3).join(", "));
    };

    const concatItem = () => {
        setResult(originalitems.concat(["Mango", "Grapes"]).join(", "));
    };

    const HandleClick=()=>{
    const studentObject = {
      name: form.name,
      age: Number(form.age),
      course: form.course,
      address: {
        city: form.city,
        state: form.state,
      },
    };
    setStudent(studentObject);
    setObjresult(JSON.stringify(student, null, 2));
};

    const accessProperty = () => {
  setObjresult(`
Name : ${student.name}
Age : ${student.age}
Course : ${student.course}
`);
};

    const updateCourse = () => {
    const updatedstudent={
    ...student,
    course: "JavaScript",
  };
  setStudent(updatedstudent);
  setObjresult(JSON.stringify(updatedstudent, null, 2));
};

    const deleteAge = () => {
  const { age, ...rest } = student;
  setObjesult(JSON.stringify(rest, null, 2));
};

    return (
        <Paper sx={{ p: 3 }} className="container">
            <Typography variant="h4" mb={2}>
                Arrays & Objects
            </Typography>

            <TextField
                label="Enter Fruit"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
            />

            <Typography>Original Array:{originalitems.join(", ")}</Typography>

            <Typography>
                Array : {items.join(", ")}
            </Typography>

            <Typography
                component="pre"
                mt={3}
                sx={{ whiteSpace: "pre-wrap" }}
            >
                {result}
            </Typography>

            {/* Arrays */}
            <Box className="button-container">
                <Button variant="contained" onClick={() => setResult(originalitems[1])}>
                    Access Element
                </Button>

                <Button variant="contained" onClick={() => setResult(originalitems.map((n) => n).join(", "))}>
                    Loop Array
                </Button>

                <Button variant="contained" onClick={pushItem}>
                    Push
                </Button>

                <Button variant="contained" onClick={popItem}>
                    Pop
                </Button>

                <Button variant="contained" onClick={shiftItem}>
                    Shift
                </Button>

                <Button variant="contained" onClick={unshiftItem}>
                    Unshift
                </Button>

                <Button variant="contained" onClick={sliceItem}>
                    Slice
                </Button>

                <Button variant="contained"
                onClick={() => {
                    const arr = [...originalitems];
                    arr.splice(1, 2);
                    setItems(arr)
                    setResult(arr.join(", "));
                }}>
                    Splice
                </Button>

                <Button variant="contained" onClick={concatItem}>
                    Concat
                </Button>

                <Button variant="contained" onClick={() => setResult(originalitems.join("-"))}>
                    Join
                </Button>

                <Button variant="contained" onClick={() => setResult(originalitems.indexOf(fruit))}>
                    IndexOf
                </Button>

                <Button variant="contained"
                onClick={() => setResult(originalitems.includes(fruit).toString())}>
                    Includes
                </Button>

                <Button variant="contained" onClick={() =>setResult(originalitems.find(item => item ===fruit)||"Not Found")}>
                    Find
                </Button>

                <Button variant="contained" onClick={() =>setResult(originalitems.findIndex(item => item ===fruit))}>
                    FindIndex
                </Button>

                <Button variant="contained"
                onClick={() => setResult(originalitems.map(item => item.toUpperCase()).join(", "))}>
                    Map
                </Button>

                <Button variant="contained"
                onClick={() =>setResult(originalitems.filter(item => item.length>5).join(", "))}>
                    Filter
                </Button>

                <Button variant="contained"
                onClick={() =>setResult(originalitems.reduce((a, b) => a + " "+b)) }>
                    Reduce
                </Button>

                <Button variant="contained"
                onClick={() =>setResult(originalitems.some(item => item === fruit).toString())}>
                    Some
                </Button>

                <Button variant="contained"
                onClick={() =>setResult(originalitems.every(item => item.length > 2).toString())}>
                    Every
                </Button>

                <Button variant="contained"
                onClick={() =>setResult([...originalitems].sort().join(", "))}>
                    Sort
                </Button>

                <Button variant="contained"
                onClick={() =>setResult([...originalitems].reverse().join(", "))}>
                    Reverse
                </Button>

                <Button variant="contained"
                onClick={() =>setResult(nestedArray.flat().join(", "))}>
                    Flat
                </Button>
            </Box>

            <Typography variant="h5" mt={3}>
                Objects
            </Typography>

            <TextField
                label="Name"
                value={form.name}
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />

            <TextField
                label="Age"
                value={form.age}
                onChange={(e) =>
                    setForm({ ...form, age: e.target.value })
                }
            />

            <TextField
                label="Course"
                value={form.course}
                onChange={(e) =>
                    setForm({ ...form, course: e.target.value })
                }
            />

            <TextField
                label="City"
                value={form.city}
                onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                }
            />

            <TextField
                label="State"
                value={form.state}
                onChange={(e) =>
                    setForm({ ...form, state: e.target.value })
                }
            />

            <Button variant="contained"
            onClick={HandleClick}>
                Create Object
            </Button>

            <Button variant="contained" onClick={accessProperty}>
                Access Property
            </Button>

            <Button variant="contained" onClick={updateCourse}>
                Update Property
            </Button>

            <Button variant="contained" onClick={deleteAge}>
                Delete Property
            </Button>

            <Button variant="contained"
                onClick={() =>
                    setResult(JSON.stringify(student.address,null,2))
                }>
                Nested Object
            </Button>

            <Typography
                component="pre"
                mt={3}
                sx={{ whiteSpace: "pre-wrap" }}
            >
                {objresult}
            </Typography>
        </Paper>
    );
}

export default Arrays;