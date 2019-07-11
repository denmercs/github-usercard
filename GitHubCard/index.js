/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


const followersArray = [
  'denmercs',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(user => {
      console.log('User', user);

      const avatar = user.data.avatar_url;
      const gitName = user.data.name;
      const gitUserName = user.data.login;
      const gitLocation = user.data.location;
      const gitProfile = user.data.html_url;
      const gitFollowers = user.data.followers;
      const gitFollowing = user.data.following;
      const gitBio = user.data.bio;

      const userProfile = userCard(avatar, gitName, gitUserName, gitLocation, gitProfile, gitFollowers, gitFollowing, gitBio);

      const cards = document.querySelector('.cards');

      console.log(userProfile);
      cards.appendChild(userProfile);
    })
    .catch(error => {
      console.log('There is an error on:', error);
    });
})

// PROFILE



function userCard(avatar, gitName, gitUserName, gitLocation, gitProfile, gitFollowers, gitFollowing, gitBio) {
  // creating all element necessary
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div')
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let button = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');


  // append element to card
  card.appendChild(img);
  img.src = avatar;
  card.appendChild(cardInfo);
  card.classList.add('card');

  // append element to cardInfo
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = gitName;
  cardInfo.appendChild(name);

  username.classList.add('username');
  username.textContent = gitUserName;
  cardInfo.appendChild(username);

  location.textContent = `Location: ${gitLocation}`;
  cardInfo.appendChild(location);

  profile.textContent = 'Profile: ';
  cardInfo.appendChild(profile);
  button.textContent = 'Click Here';
  button.href = gitProfile;
  profile.appendChild(button);

  followers.textContent = `Followers: ${gitFollowers}`;
  cardInfo.appendChild(followers);
  following.textContent = `Following: ${gitFollowing}`;
  cardInfo.appendChild(following);

  bio.textContent = `Bio: ${gitBio}`;
  cardInfo.appendChild(bio);

  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/