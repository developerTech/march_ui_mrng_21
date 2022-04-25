function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.age = 10
    this.legs = 2
}

let john = new human('John','Pune');
john
human {name: 'John', city: 'Pune'}

human.prototype = new robot()

let amit = new human('Amit','Delhi')

amit
human {name: 'Amit', city: 'Delhi'}
amit.legs
2
amit.age
10