//to animate
const container = document.querySelector(".section-hero");
const card = document.querySelector(".hero");

const title = document.querySelector(".hero-title");
const btnResume = document.querySelector(".btn-resume");
const heroDescription = document.querySelector(".hero-description-box");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(10rem)";
  heroDescription.style.transform = "translateZ(15rem)";
  btnResume.style.transform = "translateZ(10rem)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0rem)";
  btnResume.style.transform = "translateZ(0rem)";
  heroDescription.style.transform = "translateZ(0rem)";
});
