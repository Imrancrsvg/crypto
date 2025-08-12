 // main.js
document.addEventListener("DOMContentLoaded", () => {
  // Load GSAP + ScrollTrigger from CDN
  if (typeof gsap === "undefined") {
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    document.head.appendChild(gsapScript);

    const triggerScript = document.createElement("script");
    triggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    document.head.appendChild(triggerScript);

    triggerScript.onload = initScrollAnimations;
  } else {
    initScrollAnimations();
  }

  function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const isSmallScreen = window.innerWidth < 768;

    // HERO SECTION
    gsap.from(".intro-section .text-content", {
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%",
      },
      x: isSmallScreen ? 20 : -50,
      opacity: 0,
      duration: 1
    });

    gsap.from(".intro-section .phone-display img", {
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%",
      },
      x: isSmallScreen ? 0 : 50,
      scale: isSmallScreen ? 0.9 : 1,
      opacity: 0,
      duration: 1
    });

    // TRUSTED SECTION
    gsap.from(".trusted-section .feature", {
      scrollTrigger: {
        trigger: ".trusted-section",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6
    });

    // PLATFORM SECTION
    gsap.from(".platform-section .card", {
      scrollTrigger: {
        trigger: ".platform-section",
        start: "top 80%",
      },
      y: isSmallScreen ? 30 : 0,
      x: isSmallScreen ? 0 : -40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    });

    gsap.from(".platform-section .platform-text", {
      scrollTrigger: {
        trigger: ".platform-section",
        start: "top 80%",
      },
      x: isSmallScreen ? 0 : 40,
      opacity: 0,
      duration: 0.8
    });

    // PORTFOLIO SECTION
    gsap.from(".portfolio-section .option", {
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    });

    // FEATURES SECTION
    gsap.from(".features-section .feature", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 100%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    });

    gsap.from(".features-section .bottom-img img", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 100%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1
    });

    // FOOTER
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 100%",
      },
      y: 50,
      opacity: 0,
      duration: 0.9
    });
  }
});
