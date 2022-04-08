var > we can redeclare and reassign
let > we cannot redeclare and  but can reassign
const>  we cannot redeclare nor reassign

var a = 10
var a >>> declare
a=10 >>>> assignment

> var a= 10
> a
10
> var a= 11
> a
11
> a = 12
12
> 

> let b = 10
undefined
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11
> 

> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.