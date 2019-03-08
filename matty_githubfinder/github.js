// Creating a generator 
class GitHub {
  constructor() {
    this.client_id = '49e9355e1b9bd4fa2c8b'; // creating new keyword client_id 
    this.client_secret = '7f3a340e9bae6b92f806bfa433efb158389a3725'; // creating new keyword client_secret 
    this.repo_count = 5;
    this.repo_sort = 'created: asc'
  }
// Using async to control promises 
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_count_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`); 

    const profile = await profileResponse.json(); 
    const repos = await reposResponse.json(); 

    return {
      profile, //This is the same as profile : profile 
      repos
    }
  }
}

