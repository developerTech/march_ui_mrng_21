var name = "Avengers"
var rating = 4.5
var ind = "Hollywood"

var name1 = "Jab We Met"
var rating1 = 4.8
var ind1 = "Bollywood"

let movie = {
    name:'Avenger',
    rating:4.5,
    ind:'Hollywood'
}

movie.name
'Avenger'
movie.rating
4.5
movie.ind
'Hollywood'
movie['name']
'Avenger'
movie['rating']
4.5

movie.type="Action"
'Action'
movie
{name: 'Avenger', rating: 4.5, ind: 'Hollywood', type: 'Action'}
movie.rating = 4.3
4.3
movie
{name: 'Avenger', rating: 4.3, ind: 'Hollywood', type: 'Action'}
delete movie.ind
true
movie
{name: 'Avenger', rating: 4.3, type: 'Action'}
delete movie.abc
true
movie
{name: 'Avenger', rating: 4.3, type: 'Action'}
delete [movie.rating,movie.name]
true
movie
{name: 'Avenger', rating: 4.3, type: 'Action'}
delete (movie.rating,movie.name)
true
movie
{name: 'Avenger', rating: 4.3, type: 'Action'}

> JSON > javascript object notation

let movies = [
    {
        name:'Avenger',
        rating:4.5,
        ind:'Hollywood'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        ind:'Bollywood'
    }
]

movies[0]
{name: 'Avenger', rating: 4.5, ind: 'Hollywood'}
movies[1]
{name: 'Jab We Met', rating: 4.8, ind: 'Bollywood'}
movies[1].name
'Jab We Met'


let movie = {
    name:'Avenger',
    rating:4.5,
    ind:'Hollywood'
}

// for in
for(key in movie){
    console.log(key)
}

name,
rating,
ind

for(key in movie){
    console.log(movie[key])
}