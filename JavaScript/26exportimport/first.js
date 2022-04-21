let dbObj = {}

dbObj.user = [
    {
        "name":"Alvin",
        "city":"Boston"
    }
]

dbObj.dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values (${data.name},${data.city})`}
}

//es5
// module.exports = dbObj;
export default dbObj
