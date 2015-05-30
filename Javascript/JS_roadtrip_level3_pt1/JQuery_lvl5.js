$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).css({"background-color": "#252b30"});
  });
});

$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).css({"background-color": "#252b30", "font-weight": "bold"});
  });
});

$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).css({"background-color": "#252b30", "font-weight": "bold"});
    $(this).find(".photos").show();
  });
});

$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).addClass("highlight");
  }).on("mouseleave", function() {
    $(this).removeClass("highlight");
  });
});

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'opacity': '1'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});