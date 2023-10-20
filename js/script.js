const card = document.querySelectorAll(".card");
const markButton = document.querySelector(".mark");
const notificationsCount = document.querySelector(".count");

let i = 0;
card.forEach((e) => {
  if (e.classList.contains("unread")) {
    i++;
  }
});
notificationsCount.textContent = i;
i = 0;

function markAllAsRead() {
  card.forEach((e) => {
    if (e.classList.contains("unread")) {
      e.classList.remove("unread");
      const dot = e.querySelector("i");
      dot.parentNode.removeChild(dot);
    }
  });
  card.forEach((e) => {
    if (e.classList.contains("unread")) {
      i++;
    }
  });
  notificationsCount.textContent = i;
  i = 0;
  event.preventDefault();
}

markButton.addEventListener("click", markAllAsRead);
