let scrollcontainer=document.querySelector(".card-slider");
let backBtn= document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.style.scrollBehaviour="auto";
});
nextBtn.addEventListener("click", ()=>{
  scrollcontainer.style.scrollBehaviour = "smooth";
  scrollcontainer.scrollLeft += 900;
});
backBtn.addEventListener("click",()=>{
  scrollcontainer.style.scrollBehaviour = "smooth";
  scrollcontainer.scrollLeft -= 900;
});


const accordians= document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
  const icon = accordian.querySelector('.icon');
  const answer = accordian.querySelector('.answer');

  accordian.addEventListener('click',() => {
    if(icon.classList.contains('active')){
      icon.classList.remove('active');
      answer.style.maxHeight = null;
    }
    else{
      icon.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  })

});