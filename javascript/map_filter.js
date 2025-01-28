const myrarr = [2, 4, 8, 7, 4, 23, 21];

//map operation

const sqr = myrarr.map((n) => {return n**2} )
console.log(sqr);
 
//WAP to multiply all elments of the array by 10
const mul  = myrarr.map((n) => {return n*10} )
console.log(mul);


console.log('Raju', 'Ramu', 'Kaliya', 'Yash');
const names=['Raju', 'Ramu', 'Kaliya', 'Yash']
const upp= names.map((n)=>{return n.toUpperCase()})

console.log(upp);

console.log('Adding gst in array ');


const prices=[23000,4500,2800,1850]
const gst= prices.map((n)=>{return n*1.18})

console.log(gst);

console.log('Converting decimals into int');

const rawPrices=['₹34.25','₹789.654','₹123.47','₹45.499']

const intPrices = rawPrices.map((p)=>{return parseInt(p.slice(1))})

console.log(intPrices);


//Write a program to traverse an array and calculate the sum of its elements. For example, if the array is [1, 3, 5, 7], the output should be 16.
console.log('the sum of its elements if the array is [1, 3, 5, 7]');

const series=[1,3,5,7];
 
let sum = 0
 for ( i = 0; i<series.length; i++)
    sum+=series[i];

console.log(sum);
 



// Write a program to map an array [2, 4, 6, 8, 10] to a new array where each element is doubled.

console.log('each element is doubled.');


const b=[2,4,6,8,10] 

const doubled = b.map((n)=> {return n*2})

console.log(doubled);

//. Given an array of temperatures in Celsius [0, 20, 30, 40], map the values to an array of temperatures in Fahrenheit using the formula F = C × 9/5 + 32.

console.log('Celsius to Fahrenheit');


const Celsius=[0,20,30,40]

const fah = Celsius.map((n) => {return n*9/5 + 32})

console.log(fah);


//Given an array of strings ["apple", "banana", "cherry", "date"], create a new array that contains only the first character of each string.

console.log('First character of each string');

const fruits= ['apple', 'banana', 'cherry', 'date']

const first = fruits.map((n)=> n[0])

console.log(first);


//Given an array of words ["cat", "elephant", "dog", "giraffe"], map the elements to their corresponding lengths.

console.log('corresponding length');

const animal = ['cat', 'elephant', 'dog', 'giraffe']

const length= animal.map((n)=>n.length)

console.log(length);


     
//filter operation

const oddnums= myrarr.filter( (n) => { return n%2!== 0})

console.log(oddnums);


