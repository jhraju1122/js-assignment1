 //Problem-02: Good Name , Bad Name............
 
function checkName(name) {
   
    // Check if the input is a string
    if (typeof name !== 'string' ) {
        return "invalid";
    }
    let lastChar = name.charAt(name.length - 1);
    let vowels = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    
    // Check if the name ends with any of the specified characters
 
    if (vowels.includes(lastChar.toLowerCase())) {
        return "Good Name";
    } 

    else {
        return "Bad Name";
    }
}

// call the  function...
console.log(checkName("Tona"));   // Output: "Bad Name"
console.log(checkName("Salm"));  // Output: "Good Name"
console.log(checkName(123));       // Output: "invalid"
