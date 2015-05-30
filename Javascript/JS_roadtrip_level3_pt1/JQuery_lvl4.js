$(document).ready(function(){
  alert($("img").length);
});

$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
});

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
});
