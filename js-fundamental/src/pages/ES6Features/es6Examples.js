// ========================================
// TEMPLATE LITERALS
// ========================================

export function templateLiteralExample() {

    console.clear();

    console.log("========= TEMPLATE LITERALS =========");

    // Example 1
    const firstName = "Vennela";
    const lastName = "Kumar";

    console.log("Example 1");
    console.log(`Full Name : ${firstName} ${lastName}`);

    // Example 2
   const student = {
    name: "Vennela",
    age: 22,
    address: {
        city: "Hyderabad"
    }
};

// Object Destructuring
const { name, age } = student;

// Template Literal
console.log(`Name: ${name}, Age: ${age}`);

// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, ...others] = colors;
console.log(first);
console.log(others);

// Spread
const copyStudent = { ...student };

// Rest
const { address, ...remaining } = student;
console.log(remaining);

// Optional Chaining
console.log(student.address?.city);
console.log(student.company?.name);

// Nullish Coalescing
const company = student.company ?? "No Company";
console.log(company);

// Enhanced Object Literals
const course = "JavaScript";
const profile = {
    name,
    age,
    course,
    greet() {
        console.log(`Hello ${this.name}`);
    }
};

profile.greet();

}