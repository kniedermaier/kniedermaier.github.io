const jumpButton = document.getElementById("jump");
const games = document.querySelectorAll("[data-dateTime]");
const form = document.querySelector("form");
const selection = document.getElementById("league-filter");

const jumpToToday = () => {
  const today = new Date();
  const upcomingDates = Array.from(games)
    .filter((node) => {
      return node.classList.value !== "hidden";
    })
    .filter((node) => {
      const date = node.getAttribute("data-dateTime");
      return new Date(date) - today > 0;
    });
  const tableHeaderHeight = document
    .querySelector("thead")
    .getBoundingClientRect().height;
  const todayElementY = upcomingDates[0].getBoundingClientRect().y;
  window.scroll({ top: todayElementY - tableHeaderHeight, behavior: "smooth" });
};

const getCurrentUrl = () => {
  const { host, pathname, protocol } = window.location;
  return `${protocol}//${host}${pathname}`;
};

const updateFilterParams = () => {
  const activeSelection = [selection.value]
    .filter((s) => Boolean(s))
    .map((s) => ["filter", s]);
  const params = new URLSearchParams(activeSelection);
  const paramString = activeSelection.length ? `?${params.toString()}` : "";
  const currentUrl = getCurrentUrl();
  const newUrl = `${currentUrl}${paramString}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};

const updateGames = () => {
  games.forEach((game) => {
    if (selection.value === "") {
      game.classList.remove("hidden");
    } else {
      if (game.dataset.league === selection.value) {
        game.classList.remove("hidden");
      } else {
        game.classList.add("hidden");
      }
    }
  });
};

const clearSelection = () => {
  tags.forEach((tag) => (tag.checked = false));
  games.forEach((game) => game.classList.remove("hidden"));
  const newUrl = getCurrentUrl();
  window.history.pushState({ path: newUrl }, "", newUrl);
};

jumpButton.addEventListener("click", (e) => {
  e.preventDefault();
  jumpToToday();
});

jumpButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  jumpToToday();
});

form.addEventListener("change", () => {
  updateGames();
  updateFilterParams();
});

window.addEventListener("load", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const activFilters = searchParams.getAll("filter");
  // if there are query params passed in, update the league selection
  if (activFilters.length > 0) {
    activFilters.forEach((af) => {
      selection.value = af;
    });
    updateGames();
  }
});
