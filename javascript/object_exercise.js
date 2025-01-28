const smartphone={
    brand : 'Samsung',
    model : 'Galaxy s25',
    price : 124000,
    colors : ['white' , 'grey' , 'black']

};

//access price of the smartphone

console.log(smartphone.price);

// update the price to 123999
smartphone.price =123999
console.log(smartphone.price);

//access the second color
console.log(smartphone.colors[1]);

//add new color after the white color
smartphone.colors.splice(1, 0, 'blue')
console.log(smartphone.colors);


const smartphoneLists =[
    {
        brand : 'Samsung',
        model : 'Galaxy s25',
        price : 124000,
        colors : ['white' , 'grey' , 'black']
    
    },
    {
        brand : 'Apple',
        model : 'Iphone 13',
        price : 110000,
        colors : ['red' , 'grey' , 'black']
    
    },
    {
        brand : 'Oneplus',
        model : '11R',
        price :  40000,
        colors : ['silver', 'pink']
    
    },
    {
        brand : 'Oppo',
        model : 'Reno 10',
        price : 56000,
        colors : ['green' , 'blue' , 'white']
    
    },
    {
        brand : 'Realme',
        model : '15 Pro',
        price : 28000,
        colors : ['blue' ,  'black']
    
    }
];

// access price of the smartphone

console.log(smartphoneLists[2].colors[1]);

//Adding color in last array
smartphoneLists[smartphoneLists.length-1].colors.splice(1,0,'Red')
console.log(smartphoneLists);




