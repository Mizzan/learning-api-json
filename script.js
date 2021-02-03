document.getElementById("submit").addEventListener("click", function () {
  const title = document.getElementById("getTitle").value;
  const content = document.getElementById("getContent").value;

  const post = { title: title, body: content };
  postToServer(post);
});

function postToServer(post) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
