function updateLogoPosition() {
  const $aside = $("aside");
  const $logo = $("#logo");

  if ($aside.length === 0 || $logo.length === 0) return;

  const distanceFromLeft = $aside[0].getBoundingClientRect().left;

  // Always keep at least 25px from the left edge
  const safeLeft = Math.max(distanceFromLeft, 25);

  $logo.css("left", safeLeft + "px");
}

function centerWrapper() {
  const browserWidth = $(window).width(); // Width of browser viewport
  const wrapperWidth = $("#wrapper").outerWidth(); // Width including padding and border
  const asideWidth = $("aside").outerWidth();
  const mainWidth = $("main").outerWidth();

  const marginLeft = Math.max(
    browserWidth / 2 - (asideWidth + mainWidth / 2 + 50),
    0,
  );
  const marginRight = Math.max((browserWidth - wrapperWidth) / 2, 0);

  $("#wrapper").css({
    "margin-left": marginLeft + "px",
    "margin-right": marginRight + "px",
  });
}

$(function () {
  updateLogoPosition();
  centerWrapper();
});

$(window).on("resize", function () {
  updateLogoPosition();
  centerWrapper();
});
