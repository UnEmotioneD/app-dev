function updateLogoPosition() {
  var $aside = $("aside");
  var $logo = $("#logo");

  if ($aside.length === 0 || $logo.length === 0) return;

  var distanceFromLeft = $aside[0].getBoundingClientRect().left;

  // Always keep at least 25px from the left edge
  var safeLeft = Math.max(distanceFromLeft, 25);

  $logo.css("left", safeLeft + "px");
}

// Run on page load
$(document).ready(function () {
  updateLogoPosition();
});

// Run on window resize
$(window).on("resize", function () {
  updateLogoPosition();
});
var aside = document.querySelector("aside");
