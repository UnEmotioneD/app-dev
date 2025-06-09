// keep spacing of logo to left edge of browser same spacing as aside
function updateLogoPosition() {
  // "$" in variable name since it includes jQuery objects
  const $aside = $("aside");
  const $logo = $("#logo");

  // exit method if there is no aside
  if ($aside.length === 0) return;

  const distanceFromLeft = $aside[0].getBoundingClientRect().left;

  // always keep at least 25px from the left edge
  // choose bigger value with .max()
  const safeLeft = Math.max(distanceFromLeft, 25);

  // set style of #logo
  $logo.css("left", safeLeft + "px");
}

function centerWrapper() {
  // get width of elements
  const browserWidth = $(window).width();
  // including border and padding
  const asideWidth = $("aside").outerWidth();
  const mainWidth = $("main").outerWidth();

  const marginLeft = Math.max(
    browserWidth / 2 - (asideWidth + mainWidth / 2 + 50),
    0,
  );

  $("#wrapper").css({
    "margin-left": marginLeft + "px",
  });
}

// execute when everything is loaded
$(function () {
  updateLogoPosition();
  centerWrapper();

  // show #links element when menu is clicked
  $("#menu").on("click", function () {
    $("#links").toggle();
  });

  // hide #links when mouse leaves #links or #menu
  $("#links").on("mouseleave", function () {
    $("#menu").on("mouseleave", function () {
      $("#links").toggle();
    });
  });
});

// run them when resizing
$(window).on("resize", function () {
  updateLogoPosition();
  centerWrapper();
});
