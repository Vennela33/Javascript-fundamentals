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
    const age = 22;

    console.log("\nExample 2");
    console.log(`${firstName} is ${age} years old.`);

    // Example 3
    const num1 = 25;
    const num2 = 15;

    console.log("\nExample 3");
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log(`${num1} × ${num2} = ${num1 * num2}`);
    console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);

    // Example 4
    console.log("\nExample 4");

    function square(number) {
        return number * number;
    }

    console.log(`Square of 8 = ${square(8)}`);

    // Example 5
    console.log("\nExample 5");

    const student = {
        name: "Rahul",
        course: "React",
        city: "Hyderabad"
    };

    console.log(
        `${student.name} is learning ${student.course} from ${student.city}.`
    );

    // Example 6
    console.log("\nExample 6");

    const marks = [80, 90, 85];

    console.log(`Marks : ${marks.join(", ")}`);

    // Example 7
    console.log("\nExample 7");

    const total = marks.reduce((sum, value) => sum + value, 0);

    console.log(`Total Marks : ${total}`);

    // Example 8
    console.log("\nExample 8");

    console.log(`Average Marks : ${(total / marks.length).toFixed(2)}`);

    // Example 9
    console.log("\nExample 9");

    const isPassed = true;

    console.log(
        `Student Status : ${isPassed ? "Passed" : "Failed"}`
    );

    // Example 10
    console.log("\nExample 10");

    console.log(`
----------------------------------------
Student Details
----------------------------------------
Name    : ${student.name}
Course  : ${student.course}
City    : ${student.city}
Age     : ${age}
----------------------------------------
`);

}