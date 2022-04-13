if(condition){
    // do something
}else{
    // do something
}

let a = 10
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

// Number 10 is even
let name = "Aakash"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "Aakash"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
> Hi Bhumika you are super admin

let name = "Aakash"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}
if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}
if(name == "Aakash"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
////////
let name = "Aakash";
let role = "User"

if(role == "Admin"){
    if(name == "Nikita"){

    }else{

    }
}else if(role == "User"){
    if(name == "Aakash"){

    }else{

    }
}else{

}

//////////
let name = "Aakash";
let role = "Admin"

if(name == "Tina " || role == "Admin"){
    console.log("You are welcome")
}else{
    console.log("You are unknown")
}
You are unknown
You are welcome

if(name == "Tina " && (role == "Admin" || role == "User")){
    console.log("You are welcome")
}else{
    console.log("You are unknown")
}

let a = 1
if(a){
    console.log("Hiii")
}else{
    console.log("Biee")
}

Hiii

let a = 0
if(a){
    console.log("Hiii")
}else{
    console.log("Biee")
}

Bie

let a = -1
if(a){
    console.log("Hiii")
}else{
    console.log("Biee")
}

Hiii

//////////// Ternary Operator
(single line if else)

condition ? "if condition is true" : "if condition is false"

let a = 20
a>20?"Hiii":"Biee"
'Biee'

let a = 20
a==20?"Hiii":"Biee"
'Hiii'

let a = 10
a<10?a+1:a-1
9

let a = 10
a==10?a+1:a-1

11

