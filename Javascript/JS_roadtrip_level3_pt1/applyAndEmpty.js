var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function puzzleQueue (input, queue){
  var length = queue.length;
  for(i = 0; i < length; i++){
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));