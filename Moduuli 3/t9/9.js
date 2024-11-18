const calculationInput = document.getElementById("calculation");
const calculateButton = document.getElementById("start");
const resultParagraph = document.getElementById("result");

const calculate = () => {
    const input = calculationInput.value.trim();

    if (!input.match(/^\d+[\+\-\*\/]\d+$/)) {
        resultParagraph.textContent = "Invalid input. Use e.g., 3+5, 7-2, 6*8, 12/4. No decimals allowed";
        return;
    }

    let result;

    if (input.includes("+")) {
        const [num1, num2] = input.split("+").map(Number);
        result = num1 + num2;
    } else if (input.includes("-")) {
        const [num1, num2] = input.split("-").map(Number);
        result = num1 - num2;
    } else if (input.includes("*")) {
        const [num1, num2] = input.split("*").map(Number);
        result = num1 * num2;
    } else if (input.includes("/")) {
        const [num1, num2] = input.split("/").map(Number);
        if (num2 === 0) {
            resultParagraph.textContent = "Division by zero is not allowed.";
            return;
        }
        result = Math.floor(num1 / num2);
    } else {
        resultParagraph.textContent = "Unsupported operation.";
        return;
    }

    resultParagraph.textContent = `Result: ${result}`;
};

calculateButton.addEventListener("click", calculate);