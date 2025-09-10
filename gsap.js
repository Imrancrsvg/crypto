 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(Flip)
  

  const mm = gsap.matchMedia();
  

  mm.add("(max-width: 768px)", () => {
    // Intro text and image
    gsap.from(".intro-section .text-content", {
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 60%",
        end:"bottom 20%",
        marker:true,
        toggleActions: "play none none none",
      },
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".intro-section .phone-display ", {
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
      x: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Trusted Section features/cards animation
    gsap.from(".trusted-section .feature", {
      scrollTrigger: {
        trigger: ".trusted-section",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      x: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.4,
    });

    // Platform Section cards animation
    gsap.from(".platform-section .card", {
      scrollTrigger: {
        trigger: ".card",
        start: "top 50%",
        toggleActions: "play none none none",
      },
      x: -20,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.4,
    });

    // Platform text animation
    gsap.from(".platform-section .platform-text", {
      scrollTrigger: {
        trigger: ".platform-text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Portfolio Section options/cards animation
    gsap.from(".portfolio-section .option", {
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
      x: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Features Section cards animation
    gsap.from(".features-section .feature", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 60%",
        toggleActions: "play none none none",
      },
      x: -20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Features section bottom image animation
    gsap.from(".features-section .bottom-img ", {
      scrollTrigger: {
        trigger: ".bottom-img",
        start: "top 40%",
        toggleActions: "play none none none",
      },
      x: 20,
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
      delay: 0.3,
    });

    // Footer animation
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: -15,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

//Desktop Mode 
  mm.add("(min-width: 769px)", () => {
    // Intro text and image for desktop
    const tl= gsap.timeline()
    gsap.from(".intro-section .text-content",{
   y: 50,
   opacity: 0,
   duration: 2,
   ease: "power2.out",
   scrub: true,
   delay: 0.02,
      scrollTrigger: {
        trigger: ".text-content",
        start: "top center",
        end:"bottom 0%",
        toggleActions: "play none none none",
      }
    });

//phone image
    gsap.from(".intro-section .phone-display ", {
      scrollTrigger: {
        trigger: ".phone-display",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: -50,
      opacity: 0,
      duration: 3,
      ease: "power2.out",
      delay: 0.02,
    },"+=1");

 //sign in button
 gsap.from(".explore-btn",{
   x: 50,
   opacity: 0,
   duration: 1,
   ease: "power2.out(1)",
   scrub: true,
   delay: 0.2
 })

//Logo
gsap.from(".logo",{
   x: -50,
   opacity: 0,
   duration: 1,
   ease: "power2.out(1)",
   scrub: true,
   delay: 0.2
 })

    // Trusted Section features/cards animation desktop
    gsap.from(".trusted-section .feature", {
      scrollTrigger: {
        trigger: ".trusted-section",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 1,
      duration: 1,
      ease: "linear",
      stagger: 0.3,
    });
    
    document.querySelector(".card").addEventListener("click",()=>{
      const state =Flip.getState(".card") 
    })
    

    // Platform Section cards animation desktop
    gsap.from(".platform-section .card", {
      scrollTrigger: {
        trigger: ".platform-section",
        start: "top 65%",
        toggleActions: "play none none none",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger:{
        each:0.3,
            }
    });

    // Platform text animation desktop
    gsap.from(".platform-section .platform-text", {
      scrollTrigger: {
        trigger: ".platform-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    // Portfolio Section options/cards animation desktop
    gsap.from(".portfolio-section .option", {
      scrollTrigger: {
        trigger: ".portfolio-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger:{
        each:0.3,
        from:"center"
      }
    });

    // Features Section cards animation desktop
    gsap.from(".features-section .feature", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });

    // Features section bottom image animation desktop
    gsap.from(".features-section .bottom-img img", {
      scrollTrigger: {
        trigger: ".bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });
   
     // Footer animation desktop
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
});
