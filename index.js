//Problem-01 : Help The Zoo Manager---
function calculateMoney(ticket ){
    if(ticket < 0){
        return ('invalid number');
    }
    //net earnings from tickets... 
    const totalTicketSell = ticket * 120;
    
    //net costs----------
    const guard = 500;
    const perStaffLunch = 50;
    const totalStaff = 8;
    const totalStaffLunchCost = perStaffLunch * totalStaff;
    const totalCost = guard + totalStaffLunchCost;
    const totalEarning = totalTicketSell - totalCost;

 return totalEarning;
}

const totalEarning = calculateMoney(-1);
console.log(totalEarning)


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


 
//Problem 03 : Virus in my Arra//
function deleteInvalids(arr){
    if(!Array.isArray(arr)){
    return "invalid";
    }
    const numbers = arr.filter(item => typeof item === 'number' && !isNaN(item));
    return numbers;
    
    }
    
    const outNumbers = deleteInvalids()
    console.log(deleteInvalids([NaN, 1,12,0 ,-1 , undefined]));

    //Problem 04 : Make A Great Password
    function password(obj) {
        const name = obj.name;
        const birthYear = obj.birthYear.toString();
        const siteName = obj.siteName.toLowerCase();
        if (!name || !birthYear || birthYear.length !== 4 || !siteName) {
            return "invalid input";
          }
        const newPassword = siteName.charAt().toUpperCase(0) + siteName.slice(1) + "#" + name + "@" + birthYear;
        
        return newPassword;
      }
      console.log(password({name: "kolimuddin", birthYear: 1999 , siteName: "google"}))

    ///Problem 05 : Monthly Savings of a Freelancer
    function monthlySavings(payments, livingCost) {
        let totalIncome =  0;
        let totalTax =  0;
    
        // let savings = totalIncome - totalTax - livingCost;  
    
         for (const iterator of payments) {
            let totalIncome = iterator;
            let totalTax = iterator / totalIncome;
    
         
            console.log(Math.floor((totalTax ) * 100));
         }
        if (savings >= 0) {
            return savings;  
        } else {
            return "earn more";  
        }
    }
    
    let payments = [3000, 3500, 4000]; 
    let livingCost = 2500;  
    
    console.log(monthlySavings(payments, livingCost));  
     
    payments = [900 , 2700 , 3400];  
    livingCost = 3000; 
    
    console.log(monthlySavings([8000], 3000));  
    