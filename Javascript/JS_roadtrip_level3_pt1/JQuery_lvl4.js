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

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
  $(".photos").on("mouseleave", "li", function() {
    $(this).find("span").slideToggle();
  });
});

function showPhotos(){
   $(this).find("span").slideToggle();
}
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", showPhotos); 
  $(".photos").on("mouseleave", "li", showPhotos);
});

$(document).ready(function() {
  $("#nights").on("keyup", function() {
    $('#nights-count').text(+$(this).val());
  });
});

$(document).ready(function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#nights-count").text($(this).val());
    $("#total").text(nights * dailyPrice);
  });
});

$(document).ready(function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#total").text(nights * dailyPrice);
    $("#nights-count").text($(this).val());
  });
  $(this).on("focus", function() {
    $("#nights").val(7);
  });
});

$(document).ready(function() {
  $(".see-photos").on("click", function() {
  });
});

$(document).ready(function() {
  $(".see-photos").on("click", function() {
    $(this).closest(".tour").find(".photos").slideToggle();
  });
});

$(document).ready(function() {
  $(".see-photos").on("click", function(event) {
    event.stopPropagation();
    $(this).closest(".tour").find(".photos").slideToggle();
  });
  $(".tour").on("click", function() {
    alert("This should not be called");
  });
});