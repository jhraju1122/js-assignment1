//node deleteInvalids.js

function deleteInvalids(arr){
    if(!Array.isArray('arr')){
        return ('invalid input')
    }
    const numbers = arr.filter(item => typeof item === 'number' && !isNaN(item));
    return numbers;
}

//call the function
const outNumbers =  deleteInvalids();
console.log(outNumbers)

 
