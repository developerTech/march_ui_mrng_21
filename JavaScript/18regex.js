regular express 
^$
//if pattern match you will get the array else you will get null

// only work with single letter
let a = "hi"
a.match("^([a-z])$")
null

// only work with 2 letter word
var b = "hi"
b.match("^([a-z]{2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefined]

/// range of value
var b = "hiii"
b.match("^([a-z]{2,5})$")
(2) ['hiii', 'hiii', index: 0, input: 'hiii', groups: undefined]

/// any length of value
var b = "hiii"
b.match("^([a-z]+)$")
(2) ['hiii', 'hiii', index: 0, input: 'hiii', groups: undefined]
var b = "h"
b.match("^([a-z]+)$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

var b = "hiii"
b.match("^([a-z0-9]+)$")

var b = "hii10"
b.match("^([a-z0-9]+)$")
(2) ['hii10', 'hii10', index: 0, input: 'hii10', groups: undefined]
var b = "hii10$"
b.match("^([a-z0-9]+)$")

var b = "hii10$"
b.match("^([a-z0-9$@#]+)$")

var b = 9876453679
b.match("^([0-9]{10})$")
VM155:2 Uncaught TypeError: b.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM155:2
var b = 9876453679
b.toString().match("^([0-9]{10})$")
(2) ['9876453679', '9876453679', index: 0, input: '9876453679', groups: undefined]

var str = "this hat is hot haat";
str.match(/h.t/g)
['hat', 'hot']
str.match(/h..t/g)
['haat']

var email = "a@a.com"
email.match("^([a-z0-9A-Z]+)@(gmail)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-z0-9A-Z]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a"
email.match("^([a-z0-9A-Z]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "ahanda205@gmail.com"
email.match("^([a-z0-9A-Z]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['ahanda205@gmail.com', 'ahanda205', 'gmail', 'com', index: 0, input: 'ahanda205@gmail.com', groups: undefined]

var email = "a@a.com"
email.match("^([a-z0-9A-Z]+)@(gmail)\.([a-zA-Z]{2,5})$")
null
var email = "a@gmail.com"
email.match("^([a-z0-9A-Z]+)@(gmail)\.([a-zA-Z]{2,5})$")
(4) ['a@gmail.com', 'a', 'gmail', 'com', index: 0, input: 'a@gmail.com', groups: undefined]