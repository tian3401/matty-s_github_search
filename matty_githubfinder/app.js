// Init Github
const github = new GitHub; 
// Init UI
const uinfo = new UI; 

// Search input 
const searchUser = document.getElementById('searchUser'); 

// Record value of input 
searchUser.addEventListener('keyup', (e) => {
  // Get input text 
  const userText = e.target.value; 

  if(userText !== '') {
    // Make HTTP call 
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //show alert 
          uinfo.showAlert('User not found', 'alert alert-danger')
        } else {
          // show profile 
          uinfo.showProfile(data.profile); 
          // show repos
          uinfo.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile 
    uinfo.clearProfile(); 
  }
}); 

