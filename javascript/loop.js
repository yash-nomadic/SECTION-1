// console.time('loop');
for(let i=0; i<10; i++){
    console.log(i);
    
}
// console.timeLog('loop');    

let a=10;

while(a<30){
    console.log(a);
    a++;
    // a+=1;
    //a += 1;
}

console.log('do while loop');

let b=20;

do{
    console.log(b);
    b++;
    
}while(b<20);

//WAP to reverse number
console.log('reverse a number');


let num= 321;
let reverse=0;
console.log(num);

    while(num>0){
        let d= num%10;
        reverse= reverse*10 + d;
        num= parseInt(num/10);
        
    }

console.log(reverse);



