class geo{
    constructor(){
        this.lat = 41.11;
        this.long = 43.23
    }
}
class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}

let french = new language1('French','France')

console.log(french)