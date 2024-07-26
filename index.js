const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-ani");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden-ani");
hiddenElements.forEach((el) => observer.observe(el));
