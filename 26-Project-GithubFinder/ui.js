class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="container card card-body mb-2">
        <div class="row"> 
            <div class="col-md-3 text-center d-grid">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-lg mb-1" style="height:47px;">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="btn btn-primary disabled"">Public Repos: ${user.public_repos}</span>
                <span class="btn btn-secondary disabled">Public Gists: ${user.public_gists}</span>
                <span class="btn btn-success disabled">Followers: ${user.followers}</span>
                <span class="btn btn-info disabled">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company ${user.company}</li>
                    <li class="list-group-item">Website ${user.blog}</li>
                    <li class="list-group-item">Location ${user.location}</li>
                    <li class="list-group-item">Member since ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="col-md-6"> 
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="d-flex flex-row-reverse"> 
            <span class="btn btn-primary disabled ms-1"">Stars: ${repo.stargazers_count}</span>
            <span class="btn btn-secondary disabled ms-1">Watchers: ${repo.watchers_count}</span>
            <span class="btn btn-success disabled ms-1">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();

    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
