var containerEl = document.querySelector(".events_filter");
var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true, // enable the multifilter extension for the mixer
    logicBetweenGroups: "and",
  },
});
