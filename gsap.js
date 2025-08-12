 // gsap-scroll.js
document.addEventListener("DOMContentLoaded", () => {
  // Load GSAP + ScrollTrigger from CDN if not already loaded
  function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const isSmallScreen = window.innerWidth < 768;

    function fadeUp(trigger, target, delay = 0, stagger = 0) {
      gsap.from(target, {
        scrollTrigger: { trigger, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay,
        stagger
      });
    }

    function slideIn(trigger, target, fromX, delay = 0, stagger = 0) {
      gsap.from(target, {
        scrollTrigger: { trigger, start: "top 85%" },
        x: fromX,
        opacity: 0,
        duration: 1,
        delay,
        stagger
      });
    }

    // INTRO SECTION
    if (isSmallScreen) {
      fadeUp(".intro-section", ".intro-section .text-content");
      fadeUp(".intro-section", ".intro-section .phone-display img", 0.2);
    } else {
      slideIn(".intro-section", ".intro-section .text-content", -50);
      slideIn(".intro-section", ".intro-section .phone-display img", 50, 0.3);
    }

    // TRUSTED SECTION
    fadeUp(".trusted-section", ".trusted-section .feature", 0, 0.2);

    // PLATFORM SECTION
    if (isSmallScreen) {
      fadeUp(".platform-section", ".platform-section .card", 0, 0.2);
      fadeUp(".platform-section", ".platform-section .platform-text", 0.2);
    } else {
      slideIn(".platform-section", ".platform-section .card", -40, 0, 0.2);
      slideIn(".platform-section", ".platform-section .platform-text", 40, 0.2);
    }

    // PORTFOLIO SECTION
    fadeUp(".portfolio-section", ".portfolio-section .option", 0, 0.2);

    // FEATURES SECTION
    fadeUp(".features-section", ".features-section .feature", 0, 0.2);
    fadeUp(".features-section", ".features-section .bottom-img img", 0.3);

    // FOOTER
    fadeUp(".footer", ".footer", 0);
  }

  if (typeof gsap === "undefined") {
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js", () => {
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js", initAnimations);
    });
  } else {
    initAnimations();
  }
});
