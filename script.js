
/* =================================
   01. MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =================================
   02. SPLIT TEXT INTO CHARACTERS
================================= */

function splitText(element, addAccent = false) {

    const text = element.textContent.trim();

    element.innerHTML = "";

    [...text].forEach(char => {

        const span = document.createElement("span");

        span.className = "letter";
        span.textContent = char;

        element.appendChild(span);

    });

    // Add blue dot after RANE

    if (addAccent) {

        const dot = document.createElement("span");

        dot.className = "accent";
        dot.textContent = ".";

        element.appendChild(dot);

    }

}


// Split first and last name

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

splitText(firstName);
splitText(lastName, true);


/* =================================
   03. GSAP ANIMATIONS
================================= */

window.addEventListener("load", () => {

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (typeof gsap === "undefined") {

        console.warn("GSAP library not loaded.");

        return;

    }

    // Respect reduced motion preference

    if (reduceMotion) {
        return;
    }


    // Get individual characters

    const firstLetters = firstName.querySelectorAll(".letter");

    const lastLetters = lastName.querySelectorAll(".letter");


    // Main animation timeline

    const tl = gsap.timeline({

        defaults: {
            ease: "power3.out"
        }

    });


    // 1. Navbar animation

    tl.from(".navbar", {

        y: -35,
        opacity: 0,
        duration: 0.8

    });


    // 2. Top information

    tl.from(".hero-label, .hero-year", {

        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15

    }, "-=0.3");


    // 3. Intro text

    tl.from(".hero-intro", {

        y: 25,
        opacity: 0,
        duration: 0.6

    }, "-=0.2");


    // 4. MANASI - Character by character

    tl.from(firstLetters, {

        y: 100,
        opacity: 0,
        rotateX: -60,
        duration: 0.8,
        stagger: 0.10,
        ease: "power4.out"

    }, "-=0.2");


    // 5. RANE - Character by character

    tl.from(lastLetters, {

        y: 100,
        opacity: 0,
        rotateX: -60,
        duration: 0.8,
        stagger: 0.10,
        ease: "power4.out"

    }, "-=0.25");


    // 6. Blue accent dot

    tl.from(".hero-title .accent", {

        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(2)"

    }, "-=0.2");


    // 7. Developer role

    tl.from(".hero-role", {

        y: 25,
        opacity: 0,
        duration: 0.6

    }, "-=0.2");


    // 8. Buttons

    tl.from(".hero-actions .btn", {

        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15

    }, "-=0.3");


    // 9. Footer

    tl.from(".hero-footer", {

        y: 20,
        opacity: 0,
        duration: 0.6

    }, "-=0.2");


});



// =================================
// ABOUT SECTION GSAP ANIMATION
// =================================

/* =================================
   04. ABOUT SECTION GSAP ANIMATION
================================= */

gsap.registerPlugin(ScrollTrigger);

const aboutSection = document.querySelector("#about");

if (aboutSection) {

    const aboutLabel = aboutSection.querySelector(".about-label");
    const aboutImage = aboutSection.querySelector(".about-image-wrapper");
    const aboutTitle = aboutSection.querySelector("#aboutTitle");
    const aboutSmallLabel = aboutSection.querySelector(".about-small-label");
    const aboutHeading = aboutSection.querySelector(".about-heading");
    const aboutDescription = aboutSection.querySelector(".about-description");
    const aboutDivider = aboutSection.querySelector(".about-divider");
    const aboutDetails = aboutSection.querySelectorAll(".about-detail");
    const aboutFooter = aboutSection.querySelector(".about-footer");

    // Split title into individual characters
    if (aboutTitle) {

        const titleText = aboutTitle.textContent.trim();

       aboutTitle.innerHTML = "";

[...titleText].forEach(char => {

    const span = document.createElement("span");

    span.className = "about-letter";
    span.textContent = char === " " ? "\u00A0" : char;

    aboutTitle.appendChild(span);

});

    }

    const aboutLetters = aboutSection.querySelectorAll(".about-letter");

    // Set initial states only for About elements
    gsap.set([
        aboutLabel,
        aboutImage,
        aboutSmallLabel,
        aboutHeading,
        aboutDescription,
        aboutDivider,
        aboutDetails,
        aboutFooter
    ], {
        opacity: 0
    });

    gsap.set(aboutImage, {
        x: -70
    });

    gsap.set(aboutLetters, {
        y: 60,
        opacity: 0,
        rotateX: -60
    });

    gsap.set(aboutDivider, {
        scaleX: 0,
        transformOrigin: "left"
    });

    // Independent About Timeline
    const aboutTimeline = gsap.timeline({
        paused: true,
        defaults: {
            ease: "power3.out"
        }
    });

    // 1. Section Label
    aboutTimeline.to(aboutLabel, {
        y: 0,
        opacity: 1,
        duration: 0.6
    });

    // 2. Image Reveal
    aboutTimeline.to(aboutImage, {
        x: 0,
        opacity: 1,
        duration: 1
    }, "-=0.2");

    // 3. Small Label
    aboutTimeline.to(aboutSmallLabel, {
        y: 0,
        opacity: 1,
        duration: 0.5
    }, "-=0.5");

    // 4. Title Character Animation
    aboutTimeline.to(aboutLetters, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.045,
        ease: "back.out(1.5)"
    }, "-=0.2");

    // 5. Heading
    aboutTimeline.to(aboutHeading, {
        y: 0,
        opacity: 1,
        duration: 0.7
    }, "-=0.2");

    // 6. Description
    aboutTimeline.to(aboutDescription, {
        y: 0,
        opacity: 1,
        duration: 0.7
    }, "-=0.3");

    // 7. Divider
    aboutTimeline.to(aboutDivider, {
        scaleX: 1,
        opacity: 1,
        duration: 0.8
    }, "-=0.2");

    // 8. Details Stagger
    aboutTimeline.to(aboutDetails, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15
    }, "-=0.3");

    // 9. Footer
    aboutTimeline.to(aboutFooter, {
        y: 0,
        opacity: 1,
        duration: 0.6
    }, "-=0.2");

    // Trigger only when About section enters viewport
    ScrollTrigger.create({
        trigger: aboutSection,
        start: "top 75%",
        once: true,
        onEnter: () => {
            aboutTimeline.play();
        }
    });

}
// work

/* =========================================
   WORK SECTION - COMPLETE GSAP ANIMATIONS
========================================= */

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

    const workSection = document.querySelector("#work");

    if (!workSection) return;

    const workMM = gsap.matchMedia();

    // -------------------------------------
    // 1. WORK INTRO
    // -------------------------------------

    gsap.from(".work-label", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".work-intro",
            start: "top 80%",
            once: true
        }
    });

    gsap.from(".work-heading > span", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".work-heading",
            start: "top 85%",
            once: true
        }
    });


    // -------------------------------------
    // 2. SECTION HEADINGS
    // -------------------------------------

    gsap.utils.toArray(".work-section-heading").forEach(heading => {

        gsap.from(heading, {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true
            }
        });

    });


    // -------------------------------------
    // 3. HORIZONTAL SECTION FUNCTION
    // -------------------------------------

    function createHorizontalSection({
        sectionSelector,
        pinSelector,
        trackSelector,
        direction,
        progressSelector
    }) {

        const section = document.querySelector(sectionSelector);
        const pin = document.querySelector(pinSelector);
        const track = document.querySelector(trackSelector);

        if (!section || !pin || !track) return null;

        const getDistance = () => {
            return Math.max(0, track.scrollWidth - pin.clientWidth);
        };

        const tween = gsap.fromTo(
            track,

            {
                x: () => {
                    return direction === "left-to-right"
                        ? -getDistance()
                        : 0;
                }
            },

            {
                x: () => {
                    return direction === "left-to-right"
                        ? 0
                        : -getDistance();
                },

                ease: "none",

                scrollTrigger: {
                    trigger: section,
                    start: "top top+=80",
                    end: () => "+=" + getDistance(),
                    pin: pin,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    pinSpacing: true
                }
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();

            gsap.set(track, {
                clearProps: "transform"
            });
        };
    }


    // -------------------------------------
    // 4. DESKTOP HORIZONTAL ANIMATIONS
    // -------------------------------------

    workMM.add("(min-width: 651px)", () => {

        const cleanups = [];

        // EXPERIENCE: RIGHT TO LEFT
        const experienceCleanup = createHorizontalSection({
            sectionSelector: ".experience-section",
            pinSelector: ".experience-pin",
            trackSelector: ".experience-track",
            direction: "right-to-left",
            progressSelector: ".experience-progress-fill"
        });

        // FREELANCE: LEFT TO RIGHT
        const freelanceCleanup = createHorizontalSection({
            sectionSelector: ".freelance-section",
            pinSelector: ".freelance-pin",
            trackSelector: ".freelance-grid",
            direction: "left-to-right"
        });

        // ACADEMIC: RIGHT TO LEFT
        const academicCleanup = createHorizontalSection({
            sectionSelector: ".academic-section",
            pinSelector: ".academic-pin",
            trackSelector: ".academic-grid",
            direction: "right-to-left"
        });

        if (experienceCleanup) cleanups.push(experienceCleanup);
        if (freelanceCleanup) cleanups.push(freelanceCleanup);
        if (academicCleanup) cleanups.push(academicCleanup);

        // EXPERIENCE PROGRESS BAR
        const experienceTrigger = ScrollTrigger.getAll().find(trigger => {
            return trigger.trigger === document.querySelector(".experience-section");
        });

        if (experienceTrigger) {
            experienceTrigger.vars.onUpdate = self => {
                const fill = document.querySelector(".experience-progress-fill");

                if (fill) {
                    gsap.set(fill, {
                        scaleX: self.progress
                    });
                }
            };
        }

        ScrollTrigger.refresh();

        return () => {
            cleanups.forEach(cleanup => cleanup());
        };

    });


    // -------------------------------------
    // 5. MOBILE - NORMAL VERTICAL LAYOUT
    // -------------------------------------

    workMM.add("(max-width: 650px)", () => {

        gsap.from(".experience-card, .freelance-card, .academic-card", {
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".experience-section",
                start: "top 80%"
            }
        });

    });


    // -------------------------------------
    // 6. BACKGROUND GLOW
    // -------------------------------------

    gsap.to(".work-glow-one", {
        x: 100,
        y: 80,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".work-glow-two", {
        x: -100,
        y: -60,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    // -------------------------------------
    // 7. REFRESH SCROLLTRIGGER
    // -------------------------------------

    ScrollTrigger.refresh();

});


/* =================================
   05. CONTACT ANIMATIONS
================================= */

if (typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const contactSection = document.querySelector("#contact");

    if (contactSection) {

        const contactHeading =
            contactSection.querySelector(".contact-heading");

        const contactIntro =
            contactSection.querySelector(".contact-description");

        const contactCards =
            contactSection.querySelectorAll(".contact-card");

        const contactLabel =
            contactSection.querySelector(".contact-label");

        const contactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        });

        contactTimeline
            .from(contactLabel, {
                opacity: 1,
                y: 20,
                duration: 0.5
            })
            .from(contactHeading, {
                opacity: 1,
                y: 45,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.2")
            .from(contactIntro, {
                opacity: 1,
                y: 25,
                duration: 0.6
            }, "-=0.4")
            .from(contactCards, {
                opacity: 1,
                y: 35,
                stagger: 0.18,
                duration: 0.65,
                ease: "power2.out"
            }, "-=0.2");

    }

}

/* FOOTER COPYRIGHT YEAR */

const copyrightYear = document.getElementById("copyrightYear");

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}


/* =================================
   AUTOMATIC PAGE SCROLL - FIXED ORDER
================================= */

let autoScrollTimer;
let autoScrollInterval;
let currentSectionIndex = 0;
let autoScrollStarted = false;

const pageSections = [
    document.querySelector("#home"),
    document.querySelector("#about"),
    document.querySelector("#skills"),
    document.querySelector("#work"),
    document.querySelector("#contact"),
    document.querySelector(".site-footer")
].filter(Boolean);

function stopAutoScroll() {
    clearTimeout(autoScrollTimer);
    clearInterval(autoScrollInterval);
    autoScrollStarted = false;
}

function startAutoScroll() {

    if (autoScrollStarted || !pageSections.length) return;

    autoScrollStarted = true;

    autoScrollInterval = setInterval(() => {

        currentSectionIndex++;

        if (currentSectionIndex >= pageSections.length) {
            currentSectionIndex = 0;
        }

        const nextSection = pageSections[currentSectionIndex];

        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });

    }, 5000);
}

// Start after 3 seconds
autoScrollTimer = setTimeout(startAutoScroll, 3000);

// Stop on manual interaction
["wheel", "touchstart", "mousedown", "keydown"].forEach(event => {
    window.addEventListener(event, stopAutoScroll, { once: true });
});
