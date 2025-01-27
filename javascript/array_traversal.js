const myrarr = [2, 4, 8, 7, 4, 23, 21];

for (let i = 0; i < myrarr.length; i++) {
    console.log(myrarr[i]);
};

console.log('for of loop');

for (let a of myrarr) {
    console.log(a);
};


console.log('for each function');

myrarr.forEach((n) => { console.log(n); });
myrarr.forEach((n, i) => { console.log(n, i); });// it shows only elements
myrarr.forEach((n, i, j) => { console.log(n, i, j); });

//Wap to print all even number

console.log('print only even number');

myrarr.forEach((n) => {
    if (n % 2 == 0)
        console.log(n);
})

//Wap to create new array with square of all the elments of the giver array

console.log('new array with square of all the elments of the giver array');

const newarr=[]

myrarr.forEach((n)=>{
newarr.push(n**2);
});

console.log(newarr);




