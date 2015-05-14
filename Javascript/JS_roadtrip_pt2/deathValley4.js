var numSheep = 4;
var monthsToPrint = 12;
var removeSheep = 0;
for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 === 0){
    removeSheep = numSheep * 0.75;
    console.log("Removing " + removeSheep + " sheep from the population.");
    numSheep = numSheep - removeSheep;
  } else if (numSheep > 10000){
    removeSheep = numSheep / 2;
    console.log("Removing " + removeSheep + " sheep from the population.");
    numSheep = numSheep - removeSheep;
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
