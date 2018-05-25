// min 2-3 tests for every function


// return only unique numbers in new array
const _unique = (_arrayOfNumbers) => {
    return  [...new Set(_arrayOfNumbers)]
}

console.log('unique', _unique([1,2,3,4,4,5,6,7,8,9,9]))
console.log('unique2', _unique([8,8,8,8,8,8,8,88]))

////////////////////////////////
// if value is odd then true
const _isOdd = (value) => {

    if ((value % 2) === 0) {
        return true
    }
    else return false
}
console.log(_isOdd(5))
console.log(_isOdd(4))
console.log(_isOdd(23))

///////////////////////////////////////
// *if str is email-like then true
// find regexp on stackoverflow :)
const _isEmail = (str) => {

    var atSymbol = str.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = str.indexOf(".");

    if (dot === str.length - 1) return false;

    return true;
}
console.log('isEmail1 ' + _isEmail('wojcicka.ma@gmail.com'))
console.log('isEmail2 ' + _isEmail('wojcickama.gmail.com'))


///////////////////////////////////////////////////
// use for/while loop
// same functionalty as map
const _mapForArray = (_array, callback) => {

    let newArr = []
    let i = 0
    for (i; i < _array.length; i++) {
        newArr.push(_array[i] * 2)
    }
    return newArr
}
console.log('realMap: ' + [1, 5, 10, 15].map(el => {
    return el * 2
}))
console.log('first _mapForArray: ' + _mapForArray([1, 5, 10, 15]))


const _mapForObject = (_object, callback) => {
    // *use for/while loop
    // same functionalty as map but for object values
}
