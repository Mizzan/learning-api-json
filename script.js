fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => displyUser(json));

function displyUser(users) {
  const userNames = users.map((user) => user.username);
  const ul = document.getElementById("display-user");

  for (let i = 0; i < userNames.length; i++) {
    const userName = userNames[i];
    const li = document.createElement("li");
    li.innerText = userName;
    ul.appendChild(li);
  }
}
