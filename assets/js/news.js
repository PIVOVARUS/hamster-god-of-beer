
const modal = document.getElementById("news-modal");
const img = document.getElementById("news-modal-img");
const title = document.getElementById("news-modal-title");
const meta = document.getElementById("news-modal-meta");
const text = document.getElementById("news-modal-text");

document.querySelectorAll(".news-card").forEach(card=>{
 card.addEventListener("click",()=>{
  modal.style.display="block";
  img.src = card.dataset.img;
  title.innerText = card.dataset.title;
  meta.innerText = card.dataset.meta;
  text.innerText = card.dataset.text;
 });
});

function closeNews(){
 modal.style.display="none";
}
