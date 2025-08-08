const a = parseInt(prompt("Enter a value: "))

function genOddSeries(a){
    const count = a%2 === 0 ? a - 1 : a;
    let result = [];

    for (let i = 0; i < count; i++){
        result.push(2*i + 1);
    }
    console.log(`Result: ${result}`)
}

genOddSeries(a)