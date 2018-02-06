function displayRepositories() {
  let repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + r.html_url + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
};

function getRepositories() {
  const req = new XMLHttpRequest();
  let username = document.getElementById('username').value
  req.addEventListener('load', displayRepositories)
  req.open("GET", `https://api.github.com/users/${username}/repos`)
};

function displayBranches() {
  const commits = JSON.parse(this.responseText)
};

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
};
