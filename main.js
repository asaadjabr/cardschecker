// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = arr => {

    // Initiate chkArr the new array to check wothout the last element of the original array.
    // Initiate lastElement the last element of the original array.

    let chkArr = [];
    let lastElement = 0;
    

    //Get the array to check.

    chkArr = arr.map(element => element);
    

    // Get the value of last element of the original array.

    lastElement = chkArr.pop();
    
    // Initiate finalChkArr the reversed array of chkArr.

    let finalChkArr = [];
    finalChkArr = chkArr.reverse();
    
    // Loop throught finalChkArr and multiply the elements with even indexes by 2.

    for (let i=0 ; i < finalChkArr.length ; i++) {
        if (i % 2 === 0) {
            finalChkArr[i] *= 2;
    }
    };
    
    // Check finalChkArr elements with value bigger that 9 and substract 9 from it.

    for (let j=0 ; j < finalChkArr.length ; j++) {
        if (finalChkArr[j] > 9) {
            finalChkArr[j] -= 9;
    }
    };

    // Get the sum of all elements in finalChkArr array.

    let sum = finalChkArr.reduce((acc, curr) => {
        return acc + curr
    });
    

    // Add the sum of finalChkArr to value od the last element of the original array.

    let total = sum + lastElement;

    // Check if total module 10 is 0.

    if (total % 10 === 0) {
        return 'Valid number';   
    }  else {
        return 'Invalid number!';
    }
  
}


    // Create a new function to check nested array and return a new array with invalid numbers

    let invalidBatch = [];

const findInvalidCards = arr => {

    arr.filter(element => {
     if (validateCred(element) === 'Invalid number!') {
        invalidBatch.push(element);
     }
    
    })
    return invalidBatch;
}
    


// Create a function that identifies the credit card companies that have possibly issued these faulty numbers.

let companies = [];

const idInvalidCardCompanies = arr => {

// Loop throught invalid array and return a tempcomp array that contains the names of companies.

    let tempcomp = [];

    arr.forEach(element =>{
        if (element[0] === 3) {
            
            tempcomp.push('Amex (American Express)');
         } else if (element[0] === 4) {
             tempcomp.push('Visa');
 
         } else if (element[0] === 5) {
             tempcomp.push('MasterCard');
 
         } else if (element[0] === 6) {
             tempcomp.push('Discover');
 
         } else {
             console.log('Company not found!')
         }
    }
       
    )
    
    // Filter tempcomp array and return companies array that contains company name once.

    if (tempcomp.includes('Amex (American Express)') === true) {
        companies.push('Amex (American Express)')
    } 
    if (tempcomp.includes('Visa') === true) {
        companies.push('Visa')
    }
    if (tempcomp.includes('MasterCard') === true) {
        companies.push('MasterCard')
    }
    if (tempcomp.includes('Discover') === true) {
        companies.push('Discover')
    }
    return companies;
}

// console.log(validateCred([4,9,2,9,8,6,7,2,0,4,7,0,9,6,7,1]));
// console.log(findInvalidCards(batch));
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));
