var city = "lOnDOn"
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'
city.length
6
var city = "lOnDOn"
undefined
city[0]
'l'
city[1]
'O'
city[city.length-1]
'n'

var name ="  Nikita  "
name.length
10
name.trim()
'Nikita'

var name ="  Nikita . "
name.trim()
'Nikita .'

var a = "John"
var b = "john"
undefined
a==b
false
a.toLowerCase() == a.toUpperCase()
false
a.toLowerCase() == a.toLowerCase()
true


var city = "amSTerdAM"
"Amsterdam"

var city = "amSTerdAM"
undefined
city[0]
'a'
city.charAt(0)
'a'
city.at(0)
'a'
city.charAt(-1)
''
city.at(-1)
'M'
city.at(-2)
'A'

var city = "amSTerdAM"
undefined
city.slice(1)
'mSTerdAM'
city.slice(2)
'STerdAM'
city.slice(-1)
'M'
city.slice(1,3)
'mS'
city.slice(2,6)
'STer'
city.slice(2,-1)
'STerdA'
city.slice(0,-1)
'amSTerdA'
city.slice(0,-2)
'amSTerd'
city.slice(-2,1)
''


var city = "amSTerdAM"
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "parIS"
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "I am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'I am learning JS'
var b = "JavaScript"
undefined
a.replace('S','s')
'I am learning Javascript'
var a = "JavaScript I am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var name ="  Nikita . "
undefined
name.replace(' ','')
' Nikita . '
name.replace(/ /g,'')
'Nikita.'
name.replace(/ /g,'-')
'--Nikita-.-'

var url = "https://github.com/Aakashdeveloper/marchtest"
undefined
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'marchtest']
url.split('/')[1]
''
url.split('/')[4]
'marchtest'
var a = url.split('/')
undefined
a[a.length-1]
'marchtest'
var a = "JavaScript I am learning JavaScript"
undefined
a.split(' ')
(5) ['JavaScript', 'I', 'am', 'learning', 'JavaScript']


var a = "JavaScript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
var b =  ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
undefined
b.toString()
'J,a,v,a,S,c,r,i,p,t'
b.toString().replace(/,/,'')
'Ja,v,a,S,c,r,i,p,t'
b.toString().replace(/,/g,'')
'JavaScript'

b.toString().replace(/\./g,'')

var a = 10
a.toString()
'10'
""+a
'10'