class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}

let french = new language1('French','France')
undefined
french
language1 {name: 'French', country: 'France', greet: ƒ}
french.greet()
'Say Hi to French'