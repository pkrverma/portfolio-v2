// Hamburger menu for responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("navList");
  const navLinks = document.querySelectorAll("#navItem a, #resumeBtn");
  hamburger.addEventListener("click", function () {
    navList.classList.toggle("open");
    hamburger.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });
  // Close nav when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navList.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  });
  // Close nav on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      navList.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.classList.remove("nav-open");
    }
  });
});
// ===========expand more skills view===========
document.addEventListener("DOMContentLoaded", function () {
  var fexpandMoreBtn = document.querySelector("#knowMoreF");
  var oexpandMoreBtn = document.querySelector("#knowMoreO");
  var fskillsContainer = document.querySelector(".frontendSkill");
  var oskillsContainer = document.querySelector(".otherSkill");

  fexpandMoreBtn.addEventListener("click", function () {
    fskillsContainer.classList.toggle("expand");
    if (fskillsContainer.classList.contains("expand")) {
      fexpandMoreBtn.innerHTML =
        '<i class="fa-solid fa-circle-chevron-up"></i>';
    } else {
      fexpandMoreBtn.innerHTML =
        '<i class="fa-solid fa-circle-chevron-down"></i>';
    }
  });
  oexpandMoreBtn.addEventListener("click", function () {
    oskillsContainer.classList.toggle("expand");
    if (oskillsContainer.classList.contains("expand")) {
      oexpandMoreBtn.innerHTML =
        '<i class="fa-solid fa-circle-chevron-up"></i>';
    } else {
      oexpandMoreBtn.innerHTML =
        '<i class="fa-solid fa-circle-chevron-down"></i>';
    }
  });
});

// =============scroll transition=============

document.querySelectorAll("#navItem a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =============appear screen animation=============
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
document.querySelectorAll(".animate-on-scroll-up").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".animate-on-scroll-down").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".animate-on-scroll-left").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll(".animate-on-scroll-right").forEach((element) => {
  observer.observe(element);
});

function sendMail() {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector("textarea").value;

  if (name == "" || email == "" || message == "") {
    alert("Fill out the details completely!");
  } else {
    try {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "pulkit18012003@gmail.com",
        Password: "61F630B2C61BC0C7FE88CCF1BC1062FF7B37",
        To: "pulkit18012003@gmail.com",
        From: "pulkit18012003@gmail.com",
        Subject: `Contact Form Enquiry by ${name}`,
        Body: `<strong>Name: </strong>${name}<br><strong>E-mail: </strong>${email}<br><br><strong>Message: </strong>${message}`,
      }).then((message) =>
        alert(`Your Message is recieved. I will contact you shortly.Thank you!`)
      );
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: {
        perPage: 2,
        gap: ".7rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
      },
    },
  }).mount(window.splide.Extensions);
});
