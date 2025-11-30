let allreels = document.querySelector(".all-reels");

let reelData = [
  {
    id: 1,
    username: "travel_with_riya",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    caption: "Mountains are calling 🏔️❤️",
    likes: 5200,
    comments: 230,
    shares: 75,
    isLiked: false,
    isSaved: false,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel1.mp4",
  },
  {
    id: 2,
    username: "tech_sahil",
    profileImage:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    caption: "New gadget review 🔥📱",
    likes: 8100,
    comments: 312,
    shares: 140,
    isLiked: true,
    isSaved: false,
    isFollowed: false,
    isMuted: true,
    video: "./Video/reel2.mp4",
  },
  {
    id: 3,
    username: "fitness_ankur",
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    thumbnail: "https://images.unsplash.com/photo-1558611848-73f7eb4001c2",
    caption: "Leg day done 💪🔥",
    likes: 13400,
    comments: 430,
    shares: 310,
    isLiked: false,
    isSaved: true,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel4.mp4",
  },
  {
    id: 4,
    username: "foodie_raju",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    caption: "Best pasta I ever had 😍🍝",
    likes: 6900,
    comments: 214,
    shares: 97,
    isLiked: true,
    isSaved: false,
    isFollowed: false,
    isMuted: true,
    video: "./Video/reel3.mp4",
  },
  {
    id: 5,
    username: "urban_artist",
    profileImage:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a",
    thumbnail: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
    caption: "Street art hits different 🎨🔥",
    likes: 4100,
    comments: 132,
    shares: 51,
    isLiked: false,
    isSaved: false,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel4.mp4",
  },
  {
    id: 6,
    username: "dance_with_sana",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    thumbnail: "https://images.unsplash.com/photo-1520975922071-d6cc16c7b14c",
    caption: "Dance practice ✨💃",
    likes: 14200,
    comments: 540,
    shares: 420,
    isLiked: true,
    isSaved: true,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel1.mp4",
  },
  {
    id: 7,
    username: "gaming_op",
    profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    caption: "Epic clutch moment 🔥🎮",
    likes: 9500,
    comments: 410,
    shares: 160,
    isLiked: false,
    isSaved: true,
    isFollowed: false,
    isMuted: true,
    video: "./Video/reel2.mp4",
  },
  {
    id: 8,
    username: "petlover_me",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    thumbnail: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    caption: "Cutest doggo ever 🐶❤️",
    likes: 8800,
    comments: 520,
    shares: 110,
    isLiked: true,
    isSaved: false,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel4.mp4",
  },
  {
    id: 9,
    username: "motivation_daily",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    thumbnail: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    caption: "Keep grinding 💯🔥",
    likes: 15800,
    comments: 690,
    shares: 520,
    isLiked: false,
    isSaved: false,
    isFollowed: true,
    isMuted: true,
    video: "./Video/reel3.mp4",
  },
  {
    id: 10,
    username: "car_world",
    profileImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    caption: "Beast mode activated 🏎️🔥",
    likes: 10200,
    comments: 342,
    shares: 215,
    isLiked: true,
    isSaved: true,
    isFollowed: false,
    isMuted: true,
    video: "./Video/reel2.mp4",
  },
];

function addData() {
  let sum = "";
  reelData.forEach((reel, idx) => {
    // console.log(idx)
    sum += `
    <div class="reel">
      <video  class="reel-video" autoplay ${
        reel.isMuted ? "muted" : ""
      } playsinline loop preload="metadata">
        <source src="${reel.video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <i id="love" class="ri-heart-3-fill"></i>
      <div class="volume-control" >
      ${
        reel.isMuted
          ? `<i id="${idx}" class="ri-volume-mute-fill"></i>`
          : `<i id="${idx}" class="ri-volume-up-fill"></i>`
      }
      </div>

      <div class="bottom">
        <div class="main-profile">
          <img src="${reel.profileImage}" alt="">
          <h2>${reel.username}</h2>
          <button class="follow" id="${idx}">${
      reel.isFollowed ? "Unfollow" : "Follow"
    }</button>
        </div>

        <div class="caption">
          <h3>${reel.caption}</h3>
        </div>
      </div>

      <div class="right">
        <div id="${idx}" class="like">
          ${
            reel.isLiked
              ? `<i id="like" class="ri-heart-fill"></i>`
              : `<i class="ri-heart-line"></i>`
          }
          <h6>${reel.likes}</h6>
        </div>
        <div class="comment" id="${idx}"> <i class="ri-chat-3-line"></i>
          <h6>${reel.comments}</h6>
        </div>
        <div class="save" id="${idx}">
          ${
            reel.isSaved
              ? `<i class="ri-bookmark-fill"></i>`
              : `<i class="ri-bookmark-line"></i>`
          }
        </div>
        <div class="share"><i class="ri-send-plane-fill"></i>
          <h6>${reel.shares}</h6>
        </div>
        <div class="more"> <i class="ri-more-line"></i></div>
        <div class="img">
          <img src="${reel.thumbnail}" alt="">
        </div>
      </div>
    </div>
  `;
  });
  allreels.innerHTML = sum;
}

addData();

allreels.addEventListener("click", function (e) {
  // console.log(e.target.id); //Keval Like ke liye print hoga id kyuki humne like wale div ko id di hai index se
  // console.log(reelData[e.target.id].likes);

  // console.log(e.target.className);

  if (e.target.className === "like") {
    if (reelData[e.target?.id].isLiked == false) {
      reelData[e.target?.id].isLiked = true;
      reelData[e.target?.id].likes += 1;
    } else {
      reelData[e.target?.id].isLiked = false;
      reelData[e.target?.id].likes -= 1;
    }
    addData(); //Render the updated data
  }

  if (e.target.className === "follow") {
    let idx = e.target.id;
    if (reelData[idx].isFollowed == false) {
      reelData[idx].isFollowed = true;
    } else {
      reelData[idx].isFollowed = false;
    }
    addData(); //Render the updated data
  }

  console.log(e.target.className);
  if (e.target.className === "save") {
    let idx = e.target.id;
    if (reelData[idx].isSaved == false) {
      reelData[idx].isSaved = true;
    } else {
      reelData[idx].isSaved = false;
    }
    addData(); //Render the updated data
  }

  if (e.target.className === "comment") {
    let idx = e.target.id;
    console.log(idx);
    reelData[idx].comments += 1;

    addData();
  }

  if (
    e.target.className === "ri-volume-mute-fill" ||
    e.target.className === "ri-volume-up-fill"
  ) {
    let idx = e.target.id;
    reelData[idx].isMuted = !reelData[idx].isMuted;

    console.log(reelData[idx].isMuted);
    addData();
  }
});
