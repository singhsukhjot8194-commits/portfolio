// ====== PARTICLES INIT ======
particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: ["#6c63ff", "#a78bfa", "#ffffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1 },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 3, size_min: 0.5 },
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#6c63ff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
});

// ====== TYPING EFFECT FOR SUKHJOT SINGH ======
var typedEl = document.getElementById("typed-text");
var roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Python Developer",
  "Problem Solver",
];
var rIdx = 0,
  cIdx = 0,
  deleting = false;

function type() {
  var role = roles[rIdx];
  if (!deleting) {
    typedEl.textContent = role.slice(0, ++cIdx);
    if (cIdx === role.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = role.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      rIdx = (rIdx + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ====== NAVBAR SCROLL EFFECT ======
window.addEventListener("scroll", function () {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ====== MOBILE MENU TOGGLE ======
var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("click", function (e) {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// ====== AOS ANIMATION INIT ======
AOS.init({ once: true, offset: 60 });

// ====== ANIMATED SKILL BARS ON SCROLL ======
var skillObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        document.querySelectorAll(".skill-fill").forEach(function (bar) {
          bar.style.width = bar.dataset.width + "%";
        });
        skillObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 },
);

var skillsSec = document.getElementById("skills");
if (skillsSec) skillObserver.observe(skillsSec);

// ====== CONTACT FORM SUBMISSION =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var btn = this.querySelector("button[type='submit']");
  var msg = document.getElementById("formMsg");

  btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Sending...";
  btn.disabled = true;

  setTimeout(function () {
    btn.innerHTML = "<i class='fas fa-check'></i> Sent!";
    btn.style.background = "linear-gradient(135deg,#22c55e,#16a34a)";
    msg.style.display = "block";
    msg.style.color = "#22c55e";
    msg.textContent =
      "Thank you Sukhjot! Message has been submitted successfully.";
    document.getElementById("contactForm").reset();

    setTimeout(function () {
      btn.innerHTML = "<i class='fas fa-paper-plane'></i> Send Message";
      btn.style.background = "";
      btn.disabled = false;
      msg.style.display = "none";
    }, 4000);
  }, 1500);
});
