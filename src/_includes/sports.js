const button = document.querySelector("button.clear");
const dateTimes = document.querySelectorAll("[data-dateTime]");

const jumpToToday = () => {
  const today = new Date();
  const upcomingDates = Array.from(dateTimes).filter(node => {
    const date = node.getAttribute('data-dateTime');
    return new Date(date) - today > 0
  });
  upcomingDates[0].scrollIntoView({ behavior: 'smooth' });
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  jumpToToday();
});

button.addEventListener("touchend", (e) => {
  e.preventDefault();
  jumpToToday();
}, { passive: true });