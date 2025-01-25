//wap to check if a number is divisble by 7 and 11

let num= 77;
if(num%7==0 && num%11==0){
    console.log('the number is divisble by 7 and 11');
}else{
    console.log('this number is not divisble by 7 and 11');
    
}

//Wap to check if a number is perfect square

let num1=144;
if(Math.sqrt(num1)%1==0){
    console.log('this number is perfect square');
    
}else{
    console.log('this number is not perfect square');
    
}

//Wap to print all numbers divisble by 11 between 51 to 130
for(let i=51; i<=130; i++){
    if(i%11===0){
        console.log(i);
        
    }
}

//wap to check if a number is prime or not
console.log('check prime number');

const num3=29;
let isprime=true;

for(let i=2; i<num3/2; i++){
    if(num3%i===0){
        console.log('not prime');
        isprime=false;
        break;
    }
}
if(isprime){
    console.log('prime');
    
}

//WAP to check if a number is palindrome or not
let number = 12321;
let reverse = 0;
let temp = number;
while(number > 0){
    // console.log(reverse);
    // console.log(num);
    
    let d = number % 10;
    reverse = reverse * 10 + d;
    number = parseInt(number/10);
}
console.log(temp);

if(reverse === temp){
    console.log('Palindrome');
}else{
    console.log('Not Palindrome');
}


// WAP to print all perfect squares in range of 10 to 200.
console.log('perfect square between 10 to 200');
for (let i=10; i<=200; i++){
    if(Math.sqrt(i)%1==0){
        console.log(i);
    }
}

//WAP to check if a number is Armstrong.
let num2 = 406;
let armstrong = 0;
let temp2 = num2;
while(num2 > 0){
    // console.log(reverse);
    // console.log(num);
    
    let d = num2 % 10;
    armstrong = armstrong + d ** 3;
    num2 = parseInt(num2/10);
}
console.log('output', armstrong);

if(armstrong === temp2){
    console.log('Armstrong');
}else{
    console.log('Not Armstrong');
}

//WAP to check if a number is positive, negative or equal to zero

let a=-6;
if(a>0){
    console.log('a is positive number');
    }else if(a<0){
        console.log('a is negative number');
    }else{
        console.log('a is equal to zero');
        
    }

//WAP to find the greatest of three numbers.

let x=54;
let y=65;
let z=13;

if(x>y && x>z){
    console.log('x is greatest number');
    }else if(y>x && y>z){
        console.log('y is greatest number');
    }else{
        console.log('z is greatest number');
        
    } 









    