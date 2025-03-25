document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".animated-title", { duration: 1.5, scale: 0.8, opacity: 0, ease: "power2.out" });
    gsap.to(".animated-title", { duration: 1.5, textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)", delay: 1 });

    gsap.from(".sub-text", { duration: 2, opacity: 0, y: 20, ease: "power2.out", delay: 0.5 });

    gsap.from(".parallax-text", { duration: 2, opacity: 0, scale: 0.9, ease: "power2.out", delay: 1 });

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        gsap.to(".scroll-text", { opacity: 1 - scrollPosition / 500, y: scrollPosition * 0.3 });
        gsap.to(".movie-card", { scale: 1.1, stagger: 0.2, delay: 0.5 });
    });

    gsap.from(".big-text", { duration: 1.5, y: 50, scale: 0.8, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.to(".big-text", { duration: 1.5, textShadow: "0px 0px 40px rgba(255, 165, 0, 1)", delay: 1 });

    gsap.from(".animated-subtext", { duration: 2, opacity: 0, scale: 0.9, ease: "power2.out", delay: 1 });
});
