 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  // Small devices (max-width: 768px)
  mm.add("(max-width: 768px)", () => {
    // Intro
    gsap.from(".intro-section .text-content", {
      scrollTrigger: { trigger: ".intro-section", start: "top 85%" },
      x: -30,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".intro-section .phone-display img", {
      scrollTrigger: { trigger: ".intro-section", start: "top 85%" },
      x: 30,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Trusted section features (stagger)
    gsap.from(".trusted-section .feature", {
      scrollTrigger: { trigger: ".trusted-section", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Platform cards and text
    gsap.from(".platform-section .card", {
      scrollTrigger: { trigger: ".platform-section", start: "top 85%" },
      x: -20,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });
    gsap.from(".platform-section .platform-text", {
      scrollTrigger: { trigger: ".platform-section", start: "top 85%" },
      x: 20,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Portfolio options
    gsap.from(".portfolio-section .option", {
      scrollTrigger: { trigger: ".portfolio-section", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Features section
    gsap.from(".features-section .feature", {
      scrollTrigger: { trigger: ".features-section", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });
    gsap.from(".features-section .bottom-img img", {
      scrollTrigger: { trigger: ".features-section", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    // Footer
    gsap.from(".footer", {
      scrollTrigger: { trigger: ".footer", start: "top 90%" },
      y: 15,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Large devices (min-width: 769px)
  mm.add("(min-width: 769px)", () => {
    // Intro
    gsap.from(".intro-section .text-content", {
      scrollTrigger: { trigger: ".intro-section", start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".intro-section .phone-display img", {
      scrollTrigger: { trigger: ".intro-section", start: "top 85%" },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Trusted section features
    gsap.from(".trusted-section .feature", {
      scrollTrigger: { trigger: ".trusted-section", start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Platform cards and text
    gsap.from(".platform-section .card", {
      scrollTrigger: { trigger: ".platform-section", start: "top 85%" },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });
    gsap.from(".platform-section .platform-text", {
      scrollTrigger: { trigger: ".platform-section", start: "top 85%" },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Portfolio options
    gsap.from(".portfolio-section .option", {
      scrollTrigger: { trigger: ".portfolio-section", start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Features section
    gsap.from(".features-section .feature", {
      scrollTrigger: { trigger: ".features-section", start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });
    gsap.from(".features-section .bottom-img img", {
      scrollTrigger: { trigger: ".features-section", start: "top 85%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    // Footer
    gsap.from(".footer", {
      scrollTrigger: { trigger: ".footer", start: "top 90%" },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
});
