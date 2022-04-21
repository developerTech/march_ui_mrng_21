//es5
//let myobj = require('./first');
import myobj from './first';

console.log(myobj.user)

console.log(myobj.dbQuery.find('Students'))

// [ { name: 'Alvin', city: 'Boston' } ]
// Select * from Students