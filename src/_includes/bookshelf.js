const form = document.querySelector("form");
const tags = document.querySelectorAll(".tag input");
const books = document.querySelectorAll(".book");
const totalBooks = document.querySelectorAll(".info p");
const clearButtonSelector = "button.clear";
const clearButton = document.querySelector(clearButtonSelector);

const getCurrentUrl = () => {
  const { host, pathname, protocol } = window.location;
  return `${protocol}//${host}${pathname}`;
};

const updateFilterParams = () => {
  const activeTags = [...tags]
    .filter((tag) => tag.checked)
    .map((tag) => ["filter", tag.id]);
  const params = new URLSearchParams(activeTags);
  const currentUrl = getCurrentUrl();
  const newUrl = `${currentUrl}?${params.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};

const updateBooks = () => {
  const checkedTags = [...tags].filter((tag) => tag.checked);

  books.forEach((book) => {
    if (checkedTags.length === 0) {
      clearButton.classList.add("hidden");
      book.classList.remove("hidden");
    } else {
      // display clearSelection button
      clearButton.classList.remove("hidden");
      const matchedFilters = checkedTags.filter((tag) => {
        return book.dataset.tags.includes(tag.value);
      });

      const matchesAllFilters = matchedFilters.length === checkedTags.length;
      if (matchesAllFilters) {
        book.classList.remove("hidden");
      } else {
        book.classList.add("hidden");
      }
    }
  });
};

const updateTotals = () => {
  totalBooks.forEach((yearlyTotal) => {
    const yearElement = yearlyTotal.parentElement.parentElement;
    const numberOfBooks =
      yearElement.querySelectorAll(".book:not(.hidden)").length;
    const plural = numberOfBooks === 1 ? "" : "s";
    yearlyTotal.textContent = `${numberOfBooks} book${plural}`;
  });
};

const clearSelection = () => {
  tags.forEach((tag) => (tag.checked = false));
  clearButton.classList.add("hidden");
  books.forEach((book) => book.classList.remove("hidden"));
  updateTotals();
  const newUrl = getCurrentUrl();
  window.history.pushState({ path: newUrl }, "", newUrl);
};

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  clearSelection();
});

clearButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  clearSelection();
}, { passive: true});

form.addEventListener("change", () => {
  updateBooks();
  updateTotals();
  updateFilterParams();
});

window.addEventListener("load", () => {
  const searchParams = new URLSearchParams(window.location.search);
  const activFilters = searchParams.getAll("filter");

  // if there are query params passed in, update the active filters selection
  if (activFilters.length > 0) {
    // open details
    document.querySelector(".bookContainer details").open = "true";
    // check relevant inputs
    activFilters.forEach((af) => {
      [...tags].find((tag) => tag.id === af).checked = "true";
    });
    updateBooks();
    updateTotals();
  }
});
