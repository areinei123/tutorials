Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i<this.length; i++) {
    if (this.type == kind){
      numKind++;
    }
  }
  return numKind;
};
