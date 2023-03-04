const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Cleopatra X",
    age: 31,
    gender: "female",
    lookingfor: "male",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    name: "John Douglas",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

const profiles = profileIterator(data);

// Next Event

document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display

function nextProfile() {
  const currentProfile = profiles.next().value;

  document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item"Name: ${currentProfile.name}</li>
      <li class="list-group-item"Name: ${currentProfile.age}</li>
      <li class="list-group-item"Name: ${currentProfile.gender}</li>
      <li class="list-group-item"Preference: ${currentProfile.lookingfor}</li>
      <li class="list-group-item"Name: ${currentProfile.location}</li>
    </ul>
  `;

  document.getElementById("imageDisplay").innerHTML = `
  <img src="${currentProfile.image}">
`;
}
// Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}
