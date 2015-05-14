var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
var lowerWatts = 62;
var higherWatts = 124;

while (currentGen <= 4){
  totalMW += lowerWatts;
  console.log("Generator #" + currentGen + " is on, adding " + lowerWatts + " MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++){
  totalMW += higherWatts;
  console.log("Generator #" + currentGen + " is on, adding " + higherWatts + " MW, for a total of " + totalMW + " MW!");
}