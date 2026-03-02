const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let index = 1;
let back_index = reviews.length - 1;
// Buttons
const next_btn = document.getElementById("next-btn");
const prev_btn = document.getElementById("prev-btn");
const rand_btn = document.getElementById("rand-btn");
// review
const person_img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

next_btn.addEventListener("click", () => {
  person(index);
  // change to the next person
  index = index >= reviews.length - 1 ? (index = 0) : ++index;
});
prev_btn.addEventListener("click", () => {
  person(back_index);
  back_index = back_index == 0 ? (index = 3) : --back_index;
});

rand_btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * reviews.length);
  person(random);
});

function person(i) {
  console.log(i);
  person_img.src = reviews[i].img;
  author.innerHTML = reviews[i].name;
  job.innerHTML = reviews[i].job;
  info.innerHTML = reviews[i].text;
}
