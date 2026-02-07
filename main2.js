function result(array) {
    let sum = array.reduce((a, b) => a + b) / array.length;
    console.log(sum);
    let filtered = array.filter(a => a < sum)
    console.log(filtered);
    let filtered2 = array.filter(a => a > sum)
    console.log(filtered2);
    
}

let numbers = [4, 75, 24, 7, 46];
result(numbers)

