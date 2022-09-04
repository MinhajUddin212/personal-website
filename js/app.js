// STICKY NAV
const sectionHeroEL = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

//TO ANIMATE HERO SECTION
const heroContainer = document.querySelector(".section-hero");
const heroCard = document.querySelector(".hero");

const heroTitle = document.querySelector(".hero-title");
const btnResume = document.querySelector(".hero-buttons");
const heroDescription = document.querySelector(".hero-description-box");
const heroMainTitle = document.querySelector(".hero-about-me");

//Moving Animation Event
heroContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
  heroCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
heroContainer.addEventListener("mouseenter", (e) => {
  heroCard.style.transition = "none";
  //Popout
  heroMainTitle.style.transform = "translateZ(12rem)";
  heroMainTitle.style.color = "#82bf2d";
  heroTitle.style.transform = "translateZ(10rem)";
  heroDescription.style.transform = "translateZ(7.5rem)";
  btnResume.style.transform = "translateZ(5rem)";
});

//Animate Out
heroContainer.addEventListener("mouseleave", (e) => {
  heroCard.style.transition = "all 0.3s ease";
  heroCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  (heroMainTitle.style.transform = "translateZ(0rem)"),
    (heroMainTitle.style.color = "#e6e6e6");

  heroTitle.style.transform = "translateZ(0rem)";
  btnResume.style.transform = "translateZ(0rem)";
  heroDescription.style.transform = "translateZ(0rem)";
});

// TO ANIMATE SKILLS SECTION

const skillsContainer = document.querySelector(".section-skills");
const skillsCard = document.querySelector(".skills-container");

const skillsHeading = document.querySelector(".skills-heading");

//Moving Animation Event
skillsContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 90;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 90;
  skillsCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
skillsContainer.addEventListener("mouseenter", (e) => {
  skillsCard.style.transition = "none";
  //Popout
  skillsHeading.style.transform = "translateZ(12rem)";
  skillsHeading.style.color = "#82bf2d";
});

// Animate out
skillsContainer.addEventListener("mouseleave", (e) => {
  skillsCard.style.transition = "all 0.3s ease";
  skillsCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  (skillsHeading.style.transform = "translateZ(0rem)"),
    (skillsHeading.style.color = "#e6e6e6");
});

// Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
