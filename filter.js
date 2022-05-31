var containerEl = document.querySelector(".sex_produkter");
var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true, // enable the multifilter extension for the mixer
    logicBetweenGroups: "and",
  },
});
