////1 write some closure

////2 write how you can handle async actions in js - code 2 ways

////3 write function to check if array elements are only numerical then return true

//4 write 4 basic calc function in pure functional style and object oriented style

//5 *write "chainable" class - person.walk().sit().eat().repeat()

//6 *write requrent function - add(3)(3)(3)() == 9 && add(2)(2)() == 4

///////////////////////////////////////////////
//1 closure example:
const makeMyName = () => {
    const name = 'magda '
    const surname = 'wojcicka'
    return name + surname

}
console.log(makeMyName())
console.log(name)

///////////////////////////////////////////////
//2  JqueryWay
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
})

//2  apiWay
fetch('https://randomuser.me/api')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
    console.log(data);
})
///////////////////////////////////////////////
//3
const arr = ['magda', 'ania', 2]
const check = arr.find((el, i) => typeof(el) !== 'number')
const trueOrFalse = (check) => {
    if (check !== 'null') {
        return false
    }
    else return true
}

console.log(trueOrFalse())


