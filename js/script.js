let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");
let img4 = document.createElement("img");
img1.id = "img-1";
img2.id = "img-2";
img3.id = "img-3";
img4.id = "img-4";

let h1 = document.createElement("h2");
let h2 = document.createElement("h2");
let h3 = document.createElement("h2");
let h4 = document.createElement("h2");
h1.id = "heading-1";
h2.id = "heading-2";
h3.id = "heading-3";
h4.id = "heading-4";

const grid1 = document.getElementById("grid-1");
const grid2 = document.getElementById("grid-2");
const grid3 = document.getElementById("grid-3");
const grid4 = document.getElementById("grid-4");

document.getElementById("industry-btn").addEventListener("click", industryBtn);
document.getElementById("service-btn").addEventListener("click", serviceBtn);
document.getElementById("product-btn").addEventListener("click", productBtn);

function industryBtn() {
  if (grid1.classList[1] == "second") {
    grid1.classList.remove("second");
    grid1.classList.add("first");
    grid2.classList.remove("second");
    grid2.classList.add("first");
    grid3.classList.remove("second");
    grid3.classList.add("first");
    grid4.classList.remove("second");
    grid4.classList.add("first");
  }

  if (document.getElementById("img-1") != null) {
    Array.from(document.querySelectorAll(".img-container")).forEach((e) => {
      e.remove();
    });
    // document.getElementById("img-1").remove();
    // document.getElementById("img-2").remove();
    // document.getElementById("img-3").remove();
    // document.getElementById("img-4").remove();
  }

  if (document.getElementById("heading-1") != null) {
    document.getElementById("heading-1").remove();
    document.getElementById("heading-2").remove();
    document.getElementById("heading-3").remove();
    document.getElementById("heading-4").remove();
  }

  grid1.insertBefore(h1, grid1.children[0]);
  grid2.insertBefore(h2, grid2.children[0]);
  grid3.insertBefore(h3, grid3.children[0]);
  grid4.insertBefore(h4, grid4.children[0]);

  document.getElementById("heading-1").innerHTML = "Education";
  document.getElementById("para-1").innerHTML =
    "We have partnered with some of the leading education and financial institutions, and nonprofits to modernize the way the world learns.";
  document.getElementById("btn-1").innerHTML = "Learn More";

  document.getElementById("heading-2").innerHTML = "Finance";
  document.getElementById("para-2").innerHTML =
    "Our experts have teamed up with a wide range of organisation's to help them adjust to fast-paced changes in the financial sector.";
  document.getElementById("btn-2").innerHTML = "Learn More";

  document.getElementById("heading-3").innerHTML = "Healthcare";
  document.getElementById("para-3").innerHTML =
    "Our apps have contributed to the technological revolution in the healthcare industry, from educating medical students to managing patients in clinics.";
  document.getElementById("btn-3").innerHTML = "Learn More";

  document.getElementById("heading-4").innerHTML = "Travel";
  document.getElementById("para-4").innerHTML =
    "We enable leading travel & hospitality search engines with our dedicated team of software developers, machine learning and data engineers.";
  document.getElementById("btn-4").innerHTML = "Learn More";
}

function serviceBtn() {
  let divImg1 = document.createElement("div");
  let divImg2 = document.createElement("div");
  let divImg3 = document.createElement("div");
  let divImg4 = document.createElement("div");
  divImg1.className = "img-container";
  divImg2.className = "img-container";
  divImg3.className = "img-container";
  divImg4.className = "img-container";

  if (grid1.classList[1] == "first") {
    grid1.classList.remove("first");
    grid1.classList.add("second");
    grid2.classList.remove("first");
    grid2.classList.add("second");
    grid3.classList.remove("first");
    grid3.classList.add("second");
    grid4.classList.remove("first");
    grid4.classList.add("second");
  }

  if (document.getElementById("img-1") != null) {
    Array.from(document.querySelectorAll(".img-container")).forEach((e) => {
      e.remove();
    });
    // document.getElementById("img-1").remove();
    // document.getElementById("img-2").remove();
    // document.getElementById("img-3").remove();
    // document.getElementById("img-4").remove();
  }

  if (document.getElementById("heading-1") != null) {
    document.getElementById("heading-1").remove();
    document.getElementById("heading-2").remove();
    document.getElementById("heading-3").remove();
    document.getElementById("heading-4").remove();
  }

  grid1.insertBefore(h1, grid1.children[0]);
  grid2.insertBefore(h2, grid2.children[0]);
  grid3.insertBefore(h3, grid3.children[0]);
  grid4.insertBefore(h4, grid4.children[0]);

  divImg1.appendChild(img1);
  divImg2.appendChild(img2);
  divImg3.appendChild(img3);
  divImg4.appendChild(img4);

  grid1.insertBefore(divImg1, grid1.children[0]);
  grid2.insertBefore(divImg2, grid2.children[0]);
  grid3.insertBefore(divImg3, grid3.children[0]);
  grid4.insertBefore(divImg4, grid4.children[0]);

  img1.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/3xgOMp7bU6o2didlOAxLMr/8c73c95808509cc81d8a77ad40adc0bc/brain_1.png";
  document.getElementById("heading-1").innerHTML = "Data and AI";
  document.getElementById("para-1").innerHTML =
    "We can help you unlock your business potential with our cutting-edge Machine Learning and Artificial Intelligence capabilities.";
  document.getElementById("btn-1").innerHTML = "Learn More";

  img2.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/227mkoIvHDPZJch01G4MKj/686ef7419b9314df89b8b4501342f84b/function_1.png";
  document.getElementById("heading-2").innerHTML = "Web Apps";
  document.getElementById("para-2").innerHTML =
    "We provide custom-tailored solutions for each phase of development from designing to coding and implementation.";
  document.getElementById("btn-2").innerHTML = "Learn More";

  img3.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/5kNW4vW4WFgNoVUqtbr3Pt/8e01ad3e0bdd76283ff60d8d4d42297e/settings__1__1__1_.png";
  document.getElementById("heading-3").innerHTML = "Mobile Apps";
  document.getElementById("para-3").innerHTML =
    "We build native apps optimized for iOS and Android to provide users with a seamless mobile experience that leverages the full power of the OS.";
  document.getElementById("btn-3").innerHTML = "Learn More";

  img4.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/67Wts0FJ4z039zn4AU16sT/a4f985d63b5654153ca106645dd11dfb/software_1.png";
  document.getElementById("heading-4").innerHTML = "Enterprise software";
  document.getElementById("para-4").innerHTML =
    "We bring your ideas to life with our turnkey solutions that are custom-designed to fit into your enterprise software ecosystem.";
  document.getElementById("btn-4").innerHTML = "Learn More";
}

function productBtn() {
  let divImg1 = document.createElement("div");
  let divImg2 = document.createElement("div");
  let divImg3 = document.createElement("div");
  let divImg4 = document.createElement("div");
  divImg1.className = "img-container";
  divImg2.className = "img-container";
  divImg3.className = "img-container";
  divImg4.className = "img-container";

  if (grid1.classList[1] == "first") {
    grid1.classList.remove("first");
    grid1.classList.add("second");
    grid2.classList.remove("first");
    grid2.classList.add("second");
    grid3.classList.remove("first");
    grid3.classList.add("second");
    grid4.classList.remove("first");
    grid4.classList.add("second");
  }

  if (document.getElementById("img-1") != null) {
    Array.from(document.querySelectorAll(".img-container")).forEach((e) => {
      e.remove();
    });
    // document.getElementById("img-1").remove();
    // document.getElementById("img-2").remove();
    // document.getElementById("img-3").remove();
    // document.getElementById("img-4").remove();
  }

  divImg1.appendChild(img1);
  divImg2.appendChild(img2);
  divImg3.appendChild(img3);
  divImg4.appendChild(img4);

  if (document.getElementById("heading-1") != null) {
    document.getElementById("heading-1").remove();
    document.getElementById("heading-2").remove();
    document.getElementById("heading-3").remove();
    document.getElementById("heading-4").remove();
  }

  grid1.insertBefore(divImg1, grid1.children[0]);
  grid2.insertBefore(divImg2, grid2.children[0]);
  grid3.insertBefore(divImg3, grid3.children[0]);
  grid4.insertBefore(divImg4, grid4.children[0]);

  img1.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/1d5ohUTbAcwRwaoSlK9LVK/d64c11cddf21645f888a86748d2d3352/Edly-logo_1__1_.png";
  grid1.insertBefore(img1, grid1.children[0]);
  document.getElementById("para-1").innerHTML =
    "A learning and training management system that responds to your needs and delivers accordingly while simultaneously connecting you to your audience.";
  document.getElementById("btn-1").innerHTML = "Explore Edly";

  img2.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/4VfrfkK6TX5oYcMwrLd671/e8055f84b1e15807cff16f96e319d57f/Moonbeam-logo_1__1_.png";
  grid2.insertBefore(img2, grid2.children[0]);
  document.getElementById("para-2").innerHTML =
    "A podcast player that enables listeners to sift through short audio clips from different podcasts and find new shows that they otherwise wouldn’t come across.";
  document.getElementById("btn-2").innerHTML = "Explore Moonbeam";

  img3.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/2Cq3bzoRpRKQGp1Xsbbjbs/92a154729dc03b7cb6afdf74c2348b5b/_x30_1-Component-_x2F_-Logo-_x2F_-Full-_x2F_-Small__1_.png";
  grid3.insertBefore(img3, grid3.children[0]);
  document.getElementById("para-3").innerHTML =
    "An applicant tracking system and recruiting software that gives you more power over hiring decisions that matter. Hirestream automates the tasks that slow you down and refines your process through single-click bulk applicant management.";
  document.getElementById("btn-3").innerHTML = "Explore Hirestream";

  img4.src =
    "https://images.ctfassets.net/o0a5sen1qlbz/3oe2OrDAwXTQoiNdHvdBx4/03795e9e2460ed9cdbeecdbad05e8d49/g12__1_.png";
  grid4.insertBefore(img4, grid4.children[0]);
  document.getElementById("para-4").innerHTML =
    "A social enterprise committed to connecting and empowering learners by making e-learning opportunities accessible and affordable for all.";
  document.getElementById("btn-4").innerHTML = "Explore ilmX";
}
