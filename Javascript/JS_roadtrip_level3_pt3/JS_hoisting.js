function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;
//  function balrog() {
//    return "fire";
//  }
//  function elf() {
//    return "pointy ears";
//  }
  function wizard() {
    return "white";
  }
  function elf() {
    return "immortal";
  }
  function balrog() {
    return "whip";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
//  power = ring();
//  return elf();
}