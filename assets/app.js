/* JUMBO ANIMATION */

let jumboTl = gsap.timeline();

jumboTl
  .fromTo(
    "#jumbo .transparent-color",
    {
      opacity: 1,
      backgroundColor: "black",
    },
    {
      opacity: 0.8,
      duration: 2,
    }
  )
  .fromTo(
    "header .logo",
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .fromTo(
    "header .menu",
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    ">-1.3"
  )
  .fromTo(
    "#jumbo .titles h1",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.3,
    },
    ">-1.3"
  )
  .fromTo(
    "#jumbo .titles h2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.3,
    },
    ">-.7"
  );

let homeController = new ScrollMagic.Controller();

/* HEADER ANIMATION */

const headerTL = gsap.timeline();

headerTL
  .fromTo(
    "header",
    {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    {
      backgroundColor: "rgba(0, 0, 0, 1)",
      duration: 0.4,
    }
  )
  .fromTo(
    "header .logo ",
    {
      scale: 1,
    },
    {
      scale: 0.8,
      duration: 0.4,
    },
    ">-0.4"
  );

let headerScene = new ScrollMagic.Scene({
  triggerElement: "#jumbo",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#jumbo").offsetHeight + 100,
})

  .setTween(headerTL)
  // .addIndicators()
  .addTo(homeController);

/* PRODUCT-LISTING ANIMATION */

const informationTL = gsap.timeline();

informationTL.fromTo(
  "#information .selections-bg",
  {
    scale: 0,
  },
  {
    scale: 1,
    stagger: 0.3,
    duration: 0.4,
  }
);

let informationScene = new ScrollMagic.Scene({
  triggerElement: "#information",
  triggerHook: 1,
  reverse: false,
  offset: 0,
  duration: 0,
})

  .setTween(informationTL)
  // .addIndicators()
  .addTo(homeController);

/* FOOTER ANIMATION */

const footerTL = gsap.timeline();

footerTL
  .fromTo(
    "footer .footer-menu",
    {
      y: 100,
    },
    {
      y: 0,
      duration: 1.2,
    }
  )
  .fromTo(
    "footer .social-menu",
    {
      y: 100,
      x: 200,
    },
    {
      y: 0,
      x: 200,
      duration: 1.2,
    },
    ""
  );

let footerScene = new ScrollMagic.Scene({
  triggerElement: "footer",
  triggerHook: 1,
  reverse: false,
  offset: 10,
  duration: 0,
})

  .setTween(footerTL)
  // .addIndicators()
  .addTo(homeController);

const mobileMenuTL = gsap.timeline({
  paused: true,
});

mobileMenuTL
  .fromTo(
    "#mobile-menu",
    {
      x: "-100%",
    },
    {
      x: 0,
      duration: 1,
    }
  )
  .fromTo(
    "#mobile-menu .menu .link ",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
    },
    ">-0.4"
  );

const openMobileMenu = document.querySelector(".open-mobile-menu");
openMobileMenu.addEventListener("click", () => {
  mobileMenuTL.play();
});

const closeMobileMenu = document.querySelector(".close-mobile-menu");
closeMobileMenu.addEventListener("click", () => {
  mobileMenuTL.reverse();
});

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector("header .menu").classList.add("mobile-mode");
  } else {
    document.querySelector("header .menu").classList.remove("mobile-mode");
  }
};
mobileModeOn();
window.addEventListener("resize", function (event) {
  mobileModeOn();
});
