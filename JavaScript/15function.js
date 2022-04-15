function
method
arrow function
iffi
generator function
/////////////
var a = 10
var b = 20
a+b
30

/////////
keyword nameoffunction(parameters){
    return value
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(10,15)
25
add("hii","Bie")

function isEven(userInput){
    if(userInput%2==0){
        console.log(`Number ${userInput} is even`)
    }else{
        console.log(`Number ${userInput} is odd`)
    }
}

isEven(4)
VM220:3 Number 4 is even
isEven(45)
VM220:5 Number 45 is odd

///method
let add = function(a,b){
    return a+b
}
add(1,2)
3

// arrow function  es6
let add = (a,b) => {
    return a+b
}
add(1,2)
3

function add(a,b){
    return a+b
}
add(1)
NaN
add(1,2,3)
3

//// Rest
function add(...args){
    console.log(args)
}

add(1,2,3)
VM315:2 (3) [1, 2, 3]

add(1,2,3,5,6,7)
VM315:2 (6) [1, 2, 3, 5, 6, 7]

function add(...args){
    let out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
    return out
}
add(1,2,3,5,6,7)
24
add(1,2,3)
6