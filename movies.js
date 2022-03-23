var boxOfficeList;
function getBoxOffice() {
  date = new Date();
  document.getElementById('boxCarousel').innerHTML = 
  `<h2>This may take a while</h2>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;
  if (localStorage.getItem('boxOfficeList')) {
    boxOfficeList = JSON.parse(localStorage.getItem('boxOfficeList'));
    updatePage(boxOfficeList);
  } else {
    
    fetch('https://imdb-api.com/en/API/BoxOffice/k_wrf1dcke')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then(response => {
        boxOfficeList = response.items;
        localStorage.setItem('boxOfficeList', JSON.stringify(boxOfficeList))
        return boxOfficeList;
      })
      .then(boxOfficeList => updatePage(boxOfficeList))
      .catch(error => document.getElementById('boxCarousel').innerHTML = 
        '<h4 style="text-align:center;">Sorry this section is not working right now!</h4>');
  }
}

var updatePage = function(boxOfficeList){
  debugger
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[0].image}" class="img-fluid rounded-start" alt="${boxOfficeList[0].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[1].image}" class="img-fluid rounded-start" alt="${boxOfficeList[1].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[2].image}" class="img-fluid rounded-start" alt="${boxOfficeList[2].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[3].image}" class="img-fluid rounded-start" alt="${boxOfficeList[3].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[4].image}" class="img-fluid rounded-start" alt="${boxOfficeList[4].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[5].image}" class="img-fluid rounded-start" alt="${boxOfficeList[5].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[6].image}" class="img-fluid rounded-start" alt="${boxOfficeList[6].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[7].image}" class="img-fluid rounded-start" alt="${boxOfficeList[7].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[8].image}" class="img-fluid rounded-start" alt="${boxOfficeList[8].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
        <div class="col-md-4 imageCard">
          <img src="${boxOfficeList[9].image}" class="img-fluid rounded-start" alt="${boxOfficeList[9].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body carouselCardBody">
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
}

// next section: show serach results


var search;
async function searchMovies(event) {
  title = event.composedPath()[2].children[0].children[0].value;
  year = event.composedPath()[2].children[1].children[0].value;
  if (title == '') {
    document.getElementById('noTitle').style.display = 'block';
    return;
  } else {
    let searchTitle = document.getElementById('searchResults');
    searchTitle.style.display = 'block';
    document.getElementById('container').innerHTML = 
    `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
    await fetchMovie(title, year);
    if (search.Error) {
      document.getElementById('container').innerHTML = 
        '<h4 style="text-align:center;">No movies found, Try again</h4>'
    } else {
      if (search.Ratings.length !== 0) {
        var rating = search.Ratings[0].Value;
      } else {
        var rating = '';
      }
      document.getElementById('container').innerHTML = 
        `<div class="row gx-5" id="searchCard">
        <div class="col-lg-12 gy-4">
        <div class="card mb-3" style="max-width: 700px;">
          <div class="row g-0">
            <div class="col-md-4" style="text-align:center;">
              <img src="${search.Poster}" class="img-fluid rounded-start" alt="${search.Title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><b>${search.Title}</b> <p class="card-text text-muted" id="imdb" style="display:inline;padding-left:10px;"><i class="fa fa-brands fa-imdb"></i>${rating}</p></h5>
                <p class="card-text"><b>Released</b>: ${search.Released}</p>
                <p class="card-text"><b>Runtime</b>: ${search.Runtime}</p>
                <p class="card-text"><b>Genre</b>: ${search.Genre}</p>
                <p class="card-text"><b>Director</b>: ${search.Director}</p>
                <p class="card-text"><b>Actors</b>: ${search.Actors}</p>
                <p class="card-text"><b>BoxOffice</b>: ${search.BoxOffice}</p>
                <p class="card-text"><b>Plot</b>: ${search.Plot}</p>
                <p class="card-text text-muted"><a target="_blank" href="https://www.imdb.com/title/${search.imdbID}">See it's page on IMDB</a></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>`;
      searchTitle.scrollIntoView();
    }
  }

  
}

async function fetchMovie(title, year) {
  return fetch(`https://www.omdbapi.com/?apikey=43a2f087&t=${title}&y=${year}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        search = {Error: 'Movie not found!'};
      }
    })
    .then(json => {
      search = json;
    });
}