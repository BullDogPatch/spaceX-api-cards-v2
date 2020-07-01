// const para = document.createElement('p')

// app.appendChild(para)

function fetchData() {
  fetch("https://api.spacexdata.com/v3/rockets")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // const body = document.querySelector('body')
      const html = data
        .map(data => {
          return `
        <div class="card-div">
        <h1>${data.rocket_name}</h1>
        <h2>${data.country}</h2>
        <p>${data.description}</p>
        <div class="img-div">
        <div>
        <img style="width: 100%" src=${data.flickr_images[0]}></img>
        </div>
        <div>
        <img style="width: 100%" src=${data.flickr_images[1]}></img>
        </div>
        </div>
        </div>
        
        `;
        })
        .join("");

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData();
