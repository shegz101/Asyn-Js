"use strict";

function displayUserData(user) {
  let userContainer = document.querySelector(".user_data");
  userContainer.innerHTML = "";

  let content = document.createElement("div");
  content.classList.add("user_card");
  content.innerHTML = `
    <div class="user_info">
      <img class="profile_pic" src="${user.avatar_url}" alt="User Avatar">
      <p><strong>Username:</strong> ${user.login}</p>
      <p><strong>Bio:</strong> ${user.bio}</p>
      <p><strong>Bio:</strong> ${user.public_repos}</p>
      <p><strong>Followers:</strong> ${user.followers}</p>
      <p><strong>Following:</strong> ${user.following}</p>
      <p><strong>Location:</strong> ${user.location}</p>
    </div>
  `;

  userContainer.appendChild(content);
}
//function to fetch data
const fetch_user_data = async () => {
  let input_data = document.getElementById("input_data");

  let user_name = input_data.value;
  let fetch_url = `https://api.github.com/users/${user_name}`;
  console.log("user name", user_name);
  try {
    const response = await fetch(`${fetch_url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    //we change the data to Json format
    const data = await response.json();
    console.log(data);
    displayUserData(data);
  } catch (error) {
    console.log("Here is the error:", error);
  }
  input_data.value = "";
};
