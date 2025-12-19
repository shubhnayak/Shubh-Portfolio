gsap.registerPlugin(ScrollTrigger);

/* HERO LOAD */
gsap.from(".home-content > *", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from(".home-img", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power3.out"
});

/* SECTION REVEALS */
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section.querySelectorAll(".heading, .section-text, .skill-box, .project-box"), {
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: "power2.out"
  });
});

/* PARALLAX IMAGE */
gsap.to(".home-img", {
  yPercent: -20,
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
