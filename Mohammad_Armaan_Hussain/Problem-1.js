class Calculator{
    constructor(a, b, operation){
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase(operation)
    }

    calculate() {
        switch(this.operation){
            case "add":
                return this.a+this.b;
            case "subtract": 
                return this.a-this.b;
            case "multiply":
                return this.a*this.b;
            case "divide":
                if(this.b !== 0){
                    return this.a/this.b;
                }
                else{
                    "Divided by zero not possible"
                }
            default:
                return "Invalid input"

        }
    }
}

const a = prompt("Enter the value of a: ");
const b = prompt("Enter the value of b: ");
const operation = prompt("Enter operation (add/ subtract/ multiply/ divide)")

const calc = new Calculator(a, b, operation);
const result = calc.calculate();
console.log(`Result: ${result}`);
alert(`Result: ${result}`)
