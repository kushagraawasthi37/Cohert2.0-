let card = document.querySelector(".card");
let main = document.querySelector("main");

let users = [
  {
    username: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "Software Developer",
    description:
      "Full-stack developer, JavaScript aur system design ka shaukeen. Free time mai open-source contribute karta hai.",
    tags: ["JavaScript", "React", "Node.js", "System Design", "Open Source"],
  },

  {
    username: "Meera Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description:
      "Creative designer jo minimal and modern UI banane ka jazba rakhti hai. User psychology uski strong skill hai.",
    tags: ["UI/UX", "Figma", "Prototyping", "Design Systems", "Branding"],
  },

  {
    username: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Data Scientist",
    description:
      "Machine learning, data analysis, aur predictive modelling ka expert. Kaggle competitions mai active.",
    tags: ["Python", "ML", "Data Analysis", "Pandas", "Deep Learning"],
  },

  {
    username: "Neha Singh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description:
      "SEO, ads, aur brand strategy me expert. Businesses ko organic + paid growth dilati hai.",
    tags: ["SEO", "Content Marketing", "Brand Strategy", "Google Ads"],
  },

  {
    username: "Kabir Mehta",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Cybersecurity Analyst",
    description:
      "Network security, penetration testing, aur threat analysis me kaafi experience. Ethical hacking enthusiast.",
    tags: [
      "Cybersecurity",
      "Ethical Hacking",
      "Networking",
      "Linux",
      "Pentesting",
    ],
  },
];

let sum = "";

users.forEach((user) => {
  sum += ` <div class="card">
            <img src=${user.image} alt="">
            <h3>${user.username}</h3>
            <h4>${user.description}</h4>
            <p>${user.tags}</p>
        </div>`;
});

main.innerHTML = sum;
