// Creating the UI generator to display the user info 
class UI {
  constructor() {
    this.profile = document.getElementById('profile'); // we place the div #profile as the value of the profile keyword 
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div> 
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.girst_url}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Memeber Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `; 
  }

  showRepos(repos) {
    let output = ''; 
    
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url} target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div> 
        </div>
      </div>
      `;
    })

    // Output repos
    document.getElementById('repos').innerHTML = output; 
  }

  clearProfile() {
    this.profile.innerHTML = ''; 
  }

  showAlert(message, className) {
    // Clear the alert before showing another one 
    this.clearAlert()
    // Create the element
    const div = document.createElement('div');
    // Add the classname 
    div.className = className; 
    // Append the message to the element
    div.append(document.createTextNode(message))
    // Get parent element 
    const search = document.querySelector('.search'); 
    // Get sibling el right before location to place div alert 
    const sibling = document.querySelector('.lead'); 
    // Insert alert 
    search.insertBefore(div, sibling); 

    // Timeout after 3 seconds 
    setTimeout(() => {
      this.clearAlert(); 
    },3000)

  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    // Not sure why we need this conditional
    // It will throw an error if we do not have b/c currentAlert = undefined 
    if(currentAlert) {
      currentAlert.remove(); 
    }
    
  }

}

