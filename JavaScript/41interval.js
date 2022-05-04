// interval > run some operation after certain interval of time
// timeout > run only once after given time

setInterval(function() {},time)

let myinterval = setInterval(function() {
    console.log(Math.random())
},3000)

0.10489886031174889
VM20:2 0.8472541229613142
VM20:2 0.6441673519280211
VM20:2 0.8000994552256551
VM20:2 0.7166310396539914
VM20:2 0.6359624682957201
VM20:2 0.9301180819301396
VM20:2 0.07198981882460953
VM20:2 0.5693228756108628

clearInterval(myinterval)
/////

setTimeout(function() {
    console.log(Math.random())
},3000)
0.8807194692278515