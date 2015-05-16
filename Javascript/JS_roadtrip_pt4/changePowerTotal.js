function changePowerTotal (totalPower, genId, genStatus, amountPower){
  if (genStatus === "on"){
    totalPower += amountPower;
    alert("Generator #" + genId + " is now on, adding " + amountPower + " MW, for a total of " + totalPower + " MW!");
  } else if (genStatus === "off"){
    totalPower -= amountPower;
    alert("Generator #" + genId + " is now off, removing " + amountPower + " MW, for a total of " + totalPower + " MW!");
  }
  return totalPower;
}