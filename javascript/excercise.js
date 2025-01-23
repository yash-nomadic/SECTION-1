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





 