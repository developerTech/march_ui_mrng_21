var a = true;
var b = true
a+b
2
true + false
1
10+true
11
10/false
Infinity


true is equal to 1
false is equal to 0

true+"true"
'truetrue'
false+true
1

true-"true"
NaN


var a = "10"
var b = "1"
a+b
'101'
parseInt(a)
10
parseInt(b)
1
parseInt(a)+parseInt(b)
11

var a = "10.1"
var b = "1.2"
parseInt(a)+parseInt(b)
11
parseFloat(a)+parseFloat(b)
11.299999999999999

var a = "10"
var b = "1.2"
parseFloat(a)+parseFloat(b)
11.2

var a = "10a"
parseInt(a)

var a = "a10"
parseInt(a)

var a = "10a"
parseInt(a)
10
var a = "a10"
parseInt(a)
NaN
var a = "hii";
parseInt(a)
NaN


var a = "10jsfjbs45d5"
parseInt(a)
10


///es6
var a = "10.1"
Number(a)
10.1
var b = "20"
Number(b)
20
Number(a+b)
10.12
a+b
'10.120'
Number(a)+Number(b)
30.1
var a = "10a"
Number(a)
NaN
var a = "a10a"
Number(a)
NaN

var a = "10.7846573756"
var b = "20.47325325"
Number(a)+Number(b)
31.257910625599997

var a = 10.7846573756
a.toFixed(2)
'10.78'
a.toFixed(3)
'10.785'
(Number(a)+Number(b)).toFixed(3)
'31.258'

Number((Number(a)+Number(b)).toFixed(3))


var a = "10"
var b = "20"
+a
10
+b
20
var c = +a
var d = +b
c+d
30

var a = "10a"
+a
NaN