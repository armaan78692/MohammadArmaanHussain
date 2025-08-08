function genSeries(){
    const a = parseInt(prompt("Enter a value of a: "));
    let result = [];

    for(let i=0; i<a; i++){
        result.push(2*i+1);
    }
console.log(`Result: ${result}`)
}

genSeries();