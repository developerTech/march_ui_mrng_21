// array is the collection of homogeneous as well as heterogeneous data type
var a  = [1,56,34,23,67,21]  >>> array of numbers
var b = ["c","sdgsd","true","fdb","berb"] >>>> array of strings
var c = [true, false, false,true,true] >>> array of Boolean

var d = [532, "fdf","fdf",true,53,325,false,true,"ddfb",34] >>> array of heterogeneous

var city = ["Delhi","Mumbai","Pune","London","Helsinki"]

city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Helsinki'

city.push('Amsterdam')
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam']
city.push('Venice')
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.pop()
'Venice'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam']
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam']
city.pop()
'Amsterdam'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']
city.pop(2)
'Helsinki'
var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.unshift('Dubai')
8
city
(8) ['Dubai', 'Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
city.shift()
'Dubai'
city
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']

push > add in the end of the array
unshift > add in the begining of the array
pop > always remove the last value
shift > always remove the first value 

var city =  ['Dubai', 'Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.slice(1)
(7) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
city
(8) ['Dubai', 'Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
city.slice(2)
(6) ['Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
city.slice(2,5)
(3) ['Mumbai', 'Pune', 'London']
city.slice(-1)
['Venice']
city.slice(0,-1)
(7) ['Dubai', 'Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam']
city.slice(0,-2)
(6) ['Dubai', 'Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']
city.slice(-2,1)
[]
city.slice(1,-2)
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']

city.splice(start,deletecount, value)


var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.splice(2,1)
['Pune']
city
(6) ['Delhi', 'Mumbai', 'London', 'Helsinki', 'Amsterdam', 'Venice']
city.splice(3,2)
(2) ['Helsinki', 'Amsterdam']
city
(4) ['Delhi', 'Mumbai', 'London', 'Venice']
city.splice(2,0,'Boston','Nice')
[]
city
(6) ['Delhi', 'Mumbai', 'Boston', 'Nice', 'London', 'Venice']
city.splice(4,1,'Indore','Dubai')
['London']
city
(7) ['Delhi', 'Mumbai', 'Boston', 'Nice', 'Indore', 'Dubai', 'Venice']

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.indexOf('Pune')
2
city.indexOf('Venice')
6
city.indexOf('Dubai')
-1
city.indexOf('Indore')
-1
city.indexOf('Delhi')
0

var a = ['a','b',4,'c',5]
var b = [1,'d',3,'f']
a+b
'a,b,4,c,51,d,3,f'
a.concat(b)
(9) ['a', 'b', 4, 'c', 5, 1, 'd', 3, 'f']
b.concat(a)
(9) [1, 'd', 3, 'f', 'a', 'b', 4, 'c', 5]

var a = "Hii"
var b = ["hii"]

typeof(a)
'string'
typeof(b)
'object'
Array.isArray(a)
false
Array.isArray(b)
true

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Amsterdam', 'Venice']
undefined
city.sort()
(7) ['Amsterdam', 'Delhi', 'Helsinki', 'London', 'Mumbai', 'Pune', 'Venice']
city.reverse()
(7) ['Venice', 'Pune', 'Mumbai', 'London', 'Helsinki', 'Delhi', 'Amsterdam']

var city = ['Delhi', 'Mumbai', ['Red','Yellow','Green',['Bmw','Audi','Merc'],'Orange'], 'Amsterdam', 'Venice']
city[0]
'Delhi'
city[2]
(5) ['Red', 'Yellow', 'Green', Array(3), 'Orange']
city[2][0]
'Red'
city[2][3]
(3) ['Bmw', 'Audi', 'Merc']
city[2][3][0]
'Bmw'

var city = ['Delhi', 'Mumbai', ['Red','Yellow','Green',['Bmw','Audi','Merc'],'Orange'], 'Amsterdam', 'Venice']

undefined
city.flat()
(9) ['Delhi', 'Mumbai', 'Red', 'Yellow', 'Green', Array(3), 'Orange', 'Amsterdam', 'Venice']
city.flat(2)
(11) ['Delhi', 'Mumbai', 'Red', 'Yellow', 'Green', 'Bmw', 'Audi', 'Merc', 'Orange', 'Amsterdam', 'Venice']
