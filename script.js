
document.title = "ImDav1d Packages - Downloads";

const themeToggleButton = document.getElementById("theme-toggle");


themeToggleButton.addEventListener("click", function() {

  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    function switchTheme() {
    const h4 = document.querySelector('h4')
    h4.classList.toggle('dark-theme');
    h4.classList.toggle('light-theme');
}
  }
});


