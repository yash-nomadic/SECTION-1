function addNums(a,b){
    var c= a+b;
    console.log(c);
}
// addNums(89,55555);
// console.log(c);


const getAvg= function(a,b,c){
    const avg= (a+b+c)/3;
    return avg;
    // console.log(avg);
    
};

const result=getAvg(11,22,33);
// console.log(result);

// es6 arrow function
const factorial= (n)=>{
   let f=1;

   for(let i=1; i<=n; i++){
    f=f*1;
   }
   return f;
};

const fact= factorial(56);
console.log(fact);

