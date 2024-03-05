const form = document.querySelector("form");
const tags = document.querySelectorAll(".tag input");
const books = document.querySelectorAll(".book");
const totalBooks = document.querySelectorAll(".info p");
const clearButtonSelector = "button.clear";
const clearButton = document.querySelector(clearButtonSelector);

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
};

document.addEventListener("click", (e) => {
  if (!e.target.matches(clearButtonSelector)) return;
  e.preventDefault();
  clearSelection();
});

document.addEventListener("touchend", (e) => {
  if (!e.target.matches(clearButtonSelector)) return;
  clearSelection();
});

form.addEventListener("change", () => {
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

  updateTotals();
});
