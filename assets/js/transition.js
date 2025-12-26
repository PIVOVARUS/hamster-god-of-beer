
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

document.querySelectorAll("a").forEach(link => {
  if(link.getAttribute("href") && link.getAttribute("href").endsWith(".html")){
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      document.body.classList.remove("page-loaded");
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  }
});
