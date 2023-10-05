const header = document.querySelector("header"),
  sidebar = header.querySelector(".sidebar"),
  toggle = header.querySelector(".toggle"),
  searchBtn = header.querySelector(".search_box"),
  modeSwtich = header.querySelector(".toggle_switch"),
  modeText = header.querySelector(".mode_text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwtich.addEventListener("click", () => {
  header.classList.toggle("dark");

  if (header.classList.contains("dark")) {
    modeText.innerText = "Dark Mode";
  } else {
    modeText.innerText = "Light Mode";
  }
});
