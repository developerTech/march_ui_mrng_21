{
    name:name
}

var [a,b] = [10,20]
a
10
b
2

var a = [10,20,30]
var [c,d] = a
undefined
c
10
d
20

function test(){
    return [1,2,3]
}

let [g,h] = test()
g
1
h
2

var y = {1:10,m:20}
var {1:abc,m:def} = y
abc
10
def
20