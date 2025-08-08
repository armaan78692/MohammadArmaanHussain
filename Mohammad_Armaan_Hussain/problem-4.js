function countMultiple(arr){

    const result = {};

    for(let i=1; i<=9; i++){
        result[i] = 0;

        
            for(let num of arr){
            if(num % i== 0){
                result[i]++;
            }
        }
         
    }
    return result;
}
const input = prompt("Enter numbers separated by commas (e.g. 1,2,3,4): ")
const array = input.split(",").map(Number);
const output = countMultiple(array)
console.log(output)