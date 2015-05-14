var totalGen = 19;
var totalMW = 0;
var lowerWatt = 62;
var higherWatt = 124;

for (numGen = 1; numGen <= 19;numGen++){
  if (numGen < 5 && numGen % 2 === 0){
    totalMW = totalMW + lowerWatt;
    console.log("Generator #" + numGen + " is on, adding " + lowerWatt + " MW, for a total of " + totalMW + " MW!");
  } else if (numGen > 4 && numGen % 2 === 0){
    totalMW = totalMW + higherWatt;
    console.log("Generator #" + numGen + " is on, adding " + higherWatt + " MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + numGen + " is off.");
  }
}