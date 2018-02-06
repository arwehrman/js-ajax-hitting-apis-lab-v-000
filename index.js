function getRepositories() {
  const req = new XMLHttpRequest();
  let username = document.getElementById('username').value
  req.addEventListener('load', displayRepositories)
  req.open("GET", `https://api.github.com//users/${username}/repos`)
};
