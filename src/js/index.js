import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

fetch('https://api.github.com/users/marlena-sliwinska/repos')
  .then(response => response.json())
  .then(response => {
      for (let repo of response)
      {    
          const {name, description, html_url} = repo;
     
        console.log(`Lala ${name} lala ${description} lala ${html_url}`);
      }
  }
    
    )
  .catch(error => {console.log('error');})