function makeTargetAssigner(sharks, targets) {
  return function(shark){
    for(var i = 0; i < sharks.length; i++){
      if (shark === sharks[i]){
        alert("What up, " + shark + "!\n" +
        "There've been " + targets[i] + 
        " sightings in our 'hood!\nTime for a swim-by lasering, homie!");
      }
    }
  };
  
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");
