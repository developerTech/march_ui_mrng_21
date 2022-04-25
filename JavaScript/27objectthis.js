// let firstname = "Michal"
// let lastname = "Peter"

// let sayHi = {
//     firstname: "Zoe",
//     lastname:'Lisa',
//     greet:()=>{
//         return `Say Hi To ${firstname} ${lastname}`
//     }
// }

// console.log(sayHi.greet())
// Say Hi To Michal Peter


let firstname = "Michal"
let lastname = "Peter"

let sayHi = {
    firstname: "Zoe",
    lastname: 'Lisa',
    greet:function(){
        return `Say Hi To ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
