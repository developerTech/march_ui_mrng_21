// es5
> ecma Script 5
// es6
> ecma Script 6

/////////
DataTypes

String = "Hiii" 'hey' "10a" 'true' "false" '75765' `Hii`
Number = 78 878767 878.8767 .98 
Boolean = true false


//es5

var a = "hii"
var b = 10
var c = true

var a = 10
typeof(a)
'number'

var b = "Hii"
typeof(b)
'string'

var c = true
typeof(c)
'boolean'

var d = 10.86786
typeof(d)
'number'

var e = "100"
typeof(e)
'string'

var a = 20
var b = 10
a+b (addition)
30
a-b
10
a*b
200
b-a
-10
b/a
0.5

4%2
0
4%1
0
4%3
1

3%4
3
2%4
2

var a= "Hii"
var b = "JavaScript"
a+b  (concat)
'HiiJavaScript'
a-b
NaN (not a number)
a*b
NaN
a/b
NaN


var a = "Hii"
var b = 1
a+b
'Hii10'
a-b
NaN

string + string = string
string + number = string
number + string = string
number + number = number

10+"20"+30 
"1020"+30
"102030"

10+20+"30" 
30+"30"
'3030'

"10"+20+30
"1020"+30
"102030"


10+"20"+30 -1
102029

10+20+"30" -1
3029

"10"+20+30-1
102029


"10a"-1
NaN
"hii"-1
NaN

"10"+1
'101'

"10"-1
9
10*"2"
20
"10"/"5"
2

10*"2a"
NaN
10*"2"
20
"10.2"*5
51

if both side of operater you have pure number
except +(concat) all operation will work