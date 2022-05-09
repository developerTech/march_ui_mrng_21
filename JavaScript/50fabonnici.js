[0,1,1,2,3,5,8,13,21]

let fabonicci = function(n){
    if(n==1){
        return [0,1]
    }else{
        let data = fabonicci(n-1)
        data.push(data[data.length-1]+data[data.length-2])
        return data
    }
}

fabonicci(8)
(9) [0, 1, 1, 2, 3, 5, 8, 13, 21]
fabonicci(9)
(10) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]