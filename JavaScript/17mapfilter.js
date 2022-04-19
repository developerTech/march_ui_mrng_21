map
> map is use to iterate over the Array
> it always return the same length of output array as input
> it is use to apply logics(add,sub,mul ,div, bind in html)

var a = [4,58,9,11,7,34,16,23,9,6,18,27]
a.map((data) => {return data*2})
[8, 116, 18, 22, 14, 68, 32, 46, 18, 12, 36, 54]

var a = [4,58,9,11]
a.map((data) => {
    return `<p>${data}</p>`
})
['<p>4</p>', '<p>58</p>', '<p>9</p>', '<p>11</p>']

var a = [4,58,9,11,7,34,16,23,9,6,18,27]
a.map((data) => { return data>20})
(12) [false, true, false, false, false, true, false, true, false, false, false, true]

filter
> filter is use to filter out the values
> it may or may not return the same length of output
> it only return those values for which condition is true


var a = [4,58,9,11,7,34,16,23,9,6,18,27]
a.filter((data) => { return data>20})
[58, 34, 23, 27]

var a = [-1,0,1,2,3]
a.map((data) => { return data*2})
[-2, 0, 2, 4, 6]

a.filter((data) => { return data*2})
[-1, 1, 2, 3]