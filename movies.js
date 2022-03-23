var boxOfficeList;
function getBoxOffice() {
  date = new Date();
  document.getElementById('boxCarousel').innerHTML = 
  '<div class="d-flex justify-content-center">\
    <div class="spinner-border" role="status">\
      <span class="visually-hidden">Loading...</span>\
    </div>\
  </div>';
  fetch('./json.txt')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.status)
      }
    })
    .then(async response => {
      boxOfficeList = response.items;
      for (item of boxOfficeList) {
        //item.image = getPosters(item);
        await getPosters(item);
        item.image = imageUrl;
      }
      return boxOfficeList;
    })
    .then( boxOfficeList => {
      console.log(boxOfficeList)
      document.getElementById('boxCarousel').innerHTML = 
      `<div id="boxOfficeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
        
      </div>
      <div class="carousel-inner">
      <!-- card 1 -->
        <div class="carousel-item active">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[0].image}" class="img-fluid rounded-start" alt="${boxOfficeList[0].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[0].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[0].rank} at week ${boxOfficeList[0].weeks} grossing ${boxOfficeList[0].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 2 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[1].image}" class="img-fluid rounded-start" alt="${boxOfficeList[1].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[1].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[1].rank} at week ${boxOfficeList[1].weeks} grossing ${boxOfficeList[1].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 3 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[2].image}" class="img-fluid rounded-start" alt="${boxOfficeList[2].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[2].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[2].rank} at week ${boxOfficeList[2].weeks} grossing ${boxOfficeList[2].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 4 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[3].image}" class="img-fluid rounded-start" alt="${boxOfficeList[3].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[3].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[3].rank} at week ${boxOfficeList[3].weeks} grossing ${boxOfficeList[3].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 5 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[4].image}" class="img-fluid rounded-start" alt="${boxOfficeList[4].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[4].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[4].rank} at week ${boxOfficeList[4].weeks} grossing ${boxOfficeList[4].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 6 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[5].image}" class="img-fluid rounded-start" alt="${boxOfficeList[5].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[5].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[5].rank} at week ${boxOfficeList[5].weeks} grossing ${boxOfficeList[5].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 7 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[6].image}" class="img-fluid rounded-start" alt="${boxOfficeList[6].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[6].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[6].rank} at week ${boxOfficeList[6].weeks} grossing ${boxOfficeList[6].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 8 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[7].image}" class="img-fluid rounded-start" alt="${boxOfficeList[7].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[7].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[7].rank} at week ${boxOfficeList[7].weeks} grossing ${boxOfficeList[7].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 9 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[8].image}" class="img-fluid rounded-start" alt="${boxOfficeList[8].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[8].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[8].rank} at week ${boxOfficeList[8].weeks} grossing ${boxOfficeList[8].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- card 10 -->
        <div class="carousel-item">
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${boxOfficeList[9].image}" class="img-fluid rounded-start" alt="${boxOfficeList[9].title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${boxOfficeList[9].title}</h5>
              <p class="card-text">Ranks number ${boxOfficeList[9].rank} at week ${boxOfficeList[9].weeks} grossing ${boxOfficeList[9].gross}.</p>
              <p class="card-text"><small class="text-muted">Last updated on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes().toString().padStart(2,0)}</small></p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#boxOfficeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
    })
    .catch(error => document.getElementById('boxCarousel').innerHTML = '<h4 style="text-align:center;">Sorry this section is not working right now</h4>');
}

var imageUrl = '';
function getPosters(item) {
  return fetch(`https://imdb-api.com/en/API/Search/k_9xxdvxgn/${item.title}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }
    })
    .then(json => {
      imageUrl = json.results[0].image;
    })
}