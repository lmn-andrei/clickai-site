(function () {
  const chips = document.querySelectorAll("[data-filter]");
  const entries = document.querySelectorAll(".entry[data-category]");
  const days = document.querySelectorAll(".day");
  const empty = document.querySelector(".empty");
  if (!chips.length) return;

  function apply(filter) {
    chips.forEach(function (chip) {
      chip.classList.toggle("activ", chip.getAttribute("data-filter") === filter);
    });

    entries.forEach(function (entry) {
      const match = filter === "toate" || entry.getAttribute("data-category") === filter;
      entry.hidden = !match;
    });

    days.forEach(function (day) {
      let node = day.nextElementSibling;
      let visible = false;
      while (node && !node.classList.contains("day")) {
        if (node.classList.contains("entry") && !node.hidden) visible = true;
        node = node.nextElementSibling;
      }
      day.hidden = !visible;
    });

    const any = Array.prototype.some.call(entries, function (entry) { return !entry.hidden; });
    if (empty) empty.classList.toggle("show", !any);
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      apply(chip.getAttribute("data-filter"));
    });
  });
})();
