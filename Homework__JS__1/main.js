const myList = {
    name: 'Aidar',
    age: 25,
    profession: 'Engineer'
}
console.log(myList)

const users = [
    {
        name: 'Alisa',
        age: 19,
        isAdmin: false
    },
    {
        name: 'Felix',
        age: 26,
        isAdmin: true
    },
    {
        name: 'John',
        age: 34,
        isAdmin: false
    },
    {
        name: 'Rufus',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Timur',
        age: 30,
        isAdmin: false
    }
]

let resuslt = 0
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
        resuslt++
}
}
console.log(resuslt)