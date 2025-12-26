
const rModal=document.getElementById("research-modal");
const rImg=document.getElementById("research-img");
const rText=document.getElementById("research-text");

document.querySelectorAll(".research-item img").forEach(img=>{
 img.onclick=()=>{
  rModal.style.display="flex";
  rImg.src=img.src;
  rText.innerText=img.dataset.desc;
 }
});
function closeResearch(){rModal.style.display="none"}
