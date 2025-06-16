gsap.from("header img", {
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.from("header h1", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "bounce.out"
    });

    gsap.from("nav a", {
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.utils.toArray("section").forEach(sec => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });
    });