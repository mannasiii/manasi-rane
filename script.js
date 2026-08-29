document.addEventListener("DOMContentLoaded", function () {

    /* ================= NAVBAR ================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ================= REVEAL ANIMATION ================= */

    const elements = document.querySelectorAll(
        ".project, .demo-section, .experience-box, .about, .skills, .education, .contact-grid"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elements.forEach(element => {
        observer.observe(element);
    });


    /* ================= ACTIVE NAV ================= */

    const sections = document.querySelectorAll("section[id]");

    const links = document.querySelectorAll(".navbar a");


    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });


        links.forEach(link => {

            link.style.color = "";

            if (link.getAttribute("href") === "#" + current) {

                link.style.color = "#08785f";

            }

        });

    });


    /* ================= PROFILE MOUSE EFFECT ================= */

    const profile = document.querySelector(".profile-card");


    if (window.innerWidth > 991) {

        document.addEventListener("mousemove", function (e) {

            const x =
                (e.clientX - window.innerWidth / 2) / 150;

            const y =
                (e.clientY - window.innerHeight / 2) / 150;


            profile.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* ================= SMOOTH LINKS ================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================
       SKILL BAR ANIMATION
    ===================================== */

    const skillSection =
        document.querySelector(".skills-section");

    const skillBars =
        document.querySelectorAll(".skill-bar i");


    if (skillSection && skillBars.length) {

        const skillObserver =
            new IntersectionObserver(
                function (entries) {

                    if (entries[0].isIntersecting) {

                        skillBars.forEach(function (bar) {

                            const targetWidth =
                                bar.getAttribute("style");

                            if (targetWidth) {

                                bar.style.width =
                                    targetWidth
                                        .replace("width:", "")
                                        .trim();

                            }

                        });

                        skillObserver.unobserve(
                            skillSection
                        );

                    }

                },
                {
                    threshold: 0.25
                }
            );


        skillObserver.observe(skillSection);

    }



    /* =====================================
       EXPERIENCE ITEM HOVER
    ===================================== */

    const experienceItems =
        document.querySelectorAll(
            ".experience-item"
        );


    experienceItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            this.style.transform =
                "translateX(6px)";

            this.style.transition =
                "transform .3s ease";

        });


        item.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateX(0)";

        });

    });



    /* =====================================
       SKILL ROW HOVER
    ===================================== */

    const skillRows =
        document.querySelectorAll(".skill-row");


    skillRows.forEach(function (row) {

        row.addEventListener("mouseenter", function () {

            const bar =
                this.querySelector(".skill-bar i");

            if (bar) {
                bar.style.transform =
                    "scaleY(2)";
            }

        });


        row.addEventListener("mouseleave", function () {

            const bar =
                this.querySelector(".skill-bar i");

            if (bar) {
                bar.style.transform =
                    "scaleY(1)";
            }

        });

    });

});