let tl = gsap.timeline({ duration: 1 });
let cardTL = gsap.timeline({ duration: 1 });
const close = document.querySelector(".close");
const card = document.querySelectorAll(".card");

tl.fromTo(".card", { y: 300 }, { stagger: { y: 0, amount: 1 } });

card.forEach((c) => {
  c.addEventListener("click", () => {
    cardTL.to(".modal", { y: -1200 });
  });
});

close.addEventListener("click", () => {
  cardTL.to(".modal", { y: -1200 }).reverse();
});
