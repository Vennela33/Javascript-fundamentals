const [result, setResult] = useState("");

const student = {
  name: "Vennela",
  age: 22,
  course: "React",
  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

// Create Object
const createObject = () => {
  setResult(JSON.stringify(student, null, 2));
};

// Access Property
const accessProperty = () => {
  setResult(student.name);
};

// Update Property
const updateProperty = () => {
  student.course = "JavaScript";
  setResult(JSON.stringify(student, null, 2));
};

// Delete Property
const deleteProperty = () => {
  delete student.age;
  setResult(JSON.stringify(student, null, 2));
};

// Nested Object
const nestedObject = () => {
  setResult(student.address.city);
};