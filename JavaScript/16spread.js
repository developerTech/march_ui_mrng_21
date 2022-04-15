var input = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}
1,2,3,4undefinedundefinedundefined

add(...input)
10


... in calling function it is spread
... in paramater is rest



function add(...args){ /// Rest
    let out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
    return out
}

add(...input) /// spread