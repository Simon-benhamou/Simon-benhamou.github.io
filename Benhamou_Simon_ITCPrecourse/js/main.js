//replace with your user:
const GITHUB_URL = "https://github.com/Simon-benhamou";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("Simon profile-image");
    profileImage.src = data.avatar_url;
  });