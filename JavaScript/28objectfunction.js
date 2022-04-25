function language(name,country){
    this.name = name;
    this.country = country;
    this.greet =() => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}country: "India"greet: () => {return `Say Hi to ${name}`}name: "Hindi"[[Prototype]]: Object
var English = new language('English','England')
undefined
English
language {name: 'English', country: 'England', greet: ƒ}
English.greet()
'Say Hi to English'