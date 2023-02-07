// Problem number one
// Description:
// This function for mind game and improve skills
function mindGame (mindGameParameter){
    
    let getAverage = (mindGameParameter * 3 + 10) / 2 - 5;
    return getAverage;
}
let inputNumber = 5 ;
let totalOutput = mindGame(inputNumber);


// Problem number two and solution
// Description:
// This function for identifying even and odd number with input and output
function evenOdd(evenOddParameter) {
    if (evenOddParameter.length % 2 ===0) {
      return "even";
    } else {
      return "odd";
    }
  }
  const names = 'mahfuz mahfuz';
   

// Problem number tree and solution
// Description:
// This function for counting and calculate number with input and output
function isLGSeven(inputNumber) {
    let outputNumbers = inputNumber -7;
    if (inputNumber <= 7) {
      return inputNumber;
    } else {
      return inputNumber * 2;
    }
  }
  const outputNumbers = 10 ;
  
// Problem number four and solution
// Description:
// This function for finding bad and good date with input and output
function findingBadData(arrayParameter){
    const arrayLength = Array.isArray(arrayParameter)
    let badData = 0;

  for(let i=0; i < arrayParameter.length; i++){
    let arrElement = arrayParameter[i];
    if(arrElement < 0 ){
        badData++;
     
     } 
    
}
return badData;
}
  
let inputArray = [ 2, -5, -7, -13 ,-2, 15 ];
let giveResult = findingBadData(inputArray);

// Problem number five and solution
// Description:
// This function for counting gems and diamond with input and output
function gemsToDiamond(mahfuzGems, marufGems, masumGems) {
    let total = mahfuzGems * 21 + marufGems * 32 + masumGems * 43;
    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
    
  }
 
  
 
  