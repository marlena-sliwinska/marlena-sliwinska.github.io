import '../scss/main.scss';


fetch('https://api.github.com/users/marlena-sliwinska/repos')
  .then(response => response.json())
  .then(response => {
      for (let repo of response)
      {    
         const {name, description, html_url, homepage} = repo;
     
         console.log(`Project named ${name} - ${description}. 
          You can find link to repository here:  i srodowisko: ${homepage}`);
        const portfolio = document.querySelector('.project__box--js');
        const myBox = `
        <article class="projects__box ">
        <table class="projects__table">
            <tr>
            <td class="projects__description">project:</td>
            <td class="projects__content projects__content--name">${name}</td>
          </tr>
          <tr>
            <td class="projects__description" style ="height: 155px">description:</td>
            <td class="projects__content"
            style="padding-bottom: 16px;"
            >${description}</td>
          </tr>
          <tr>
          
            <td class="projects__description">demo:</td>
            <td class="projects__content"><<a
              style ="color: #14B5D0"
              href="${homepage}"
              target="_blank"
              rel="noopener noreferrer"
              >see here</a>></td>
          </tr>
          <tr>
            <td class="projects__description">github:</td>
            <td class="projects__content"><<a 
              style ="color: #14B5D0"
              href="${html_url}"
              target="_blank"
              rel="noopener noreferrer"
              >source code</a>></td>
          </tr>
        </table>
        </article>`;
        portfolio.innerHTML +=  myBox;
        }
  }
    
    )
  .catch(error => {console.log('error');})