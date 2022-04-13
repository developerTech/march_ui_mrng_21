//ifelse > multiple condition and multiple output
//ternary > single condition and single output
//switch > single condition and multiple output

let name = "Arun"

switch(name){
    case "Aakash":
        console.log(`Hi ${name}`)
        break;
    case "Bhumika":
        console.log(`Hi ${name}`)
        break;
    case "Arun":
        console.log(`Hi ${name}`)
        break;
    default:
        console.log(`Hi ${name} You are unknown`)
}

let a = 10

switch(a%2){
    case 0:
        console.log(`Number ${a} is even`);
        break;
    case 1:
        console.log(`Number ${a} is odd`);
        break;
    default:
        console.log(`Unknown`);

}