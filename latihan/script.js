// $('.input-button').on('click',function(){
//     $.ajax({
//         url:'http://www.omdbapi.com/?apikey=4f3dbd0&s=' + $('.input-search').val(),
//         success: result =>{
//             const movies = result.Search;
//             let card ='';
//             movies.forEach(m => {
//                 card += showCard(m);
//             });
//             $('.movie-container').html(card)
    
    
//             // ketika tombol di click
//             $('.modal-detail-buton').on('click', function(){
//                 $.ajax({
//                     url:'http://www.omdbapi.com/?apikey=4f3dbd0&i=' + $(this).data('imdbid'),
//                     success: m =>{
//                         const movieDetail = showDetail(m);
//               $('.modal-body').html(movieDetail)
//                     },
//                     error:(e) =>{
//                         console.log(e.responseText)
//                     }
//                 });
//             });
    
    
//         },
//         error:(e) =>{
//             console.log(e.responseText)
//         }
//     })
// });


// mengunakan feth
// const searchButton = document.querySelector('.input-button');
// searchButton.addEventListener('click',function(){

//     const inputSearch = document.querySelector('.input-search');
//     fetch('http://www.omdbapi.com/?apikey=4f3dbd0&s=' + inputSearch.value)
//       .then(Response => Response.json())
//       .then(Response => {
//         const movies = Response.Search;
//         let card = '';
//         movies.forEach(m => card += showCard(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = card;

//         // ketika tombol detail di klik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-buton');
//         modalDetailButton.forEach(btn => {
//             btn.addEventListener('click',function(){
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=4f3dbd0&i=' + imdbid)
//                 .then(Response => Response.json())
//                 .then(m => {
//                     const movieDetail = showDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 });
//             });
//         });
//       });

// });


// refactoring 
const searchButton = document.querySelector('.input-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputSearch = document.querySelector('.input-search');
        const movies = await getMovies(inputSearch.value);
        updateUI(movies);
    }catch(err){
        console.log(err);
    }
});

function getMovies(search){
    return fetch('http://www.omdbapi.com/?apikey=4f3dbd0&s=' + search)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(response => {
        if (!response.Search) {
            throw new Error('No movies found');
        }
        return response.Search;
    });
};

function updateUI(movies) {
    let card = '';
    movies.forEach(m => card += showCard(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = card;
};

// ketika tombol detail di click
// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMoviesDetail(imdbid);
        updateUIDetail(movieDetail);
        console.log(movieDetail)
    }
});

function getMoviesDetail(imdbid){
   return fetch('http://www.omdbapi.com/?apikey=4f3dbd0&i=' + imdbid)
    .then(response => response.json())
    .then(m => m);
};

function updateUIDetail(m){
    const movieDetail = showDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
    console.log(modalBody)
};

function showCard(m) {
    return `<div class="col-md-4 my-3">
                 <div class="card">
                  <img src="${m.Poster}" class="card-img-top">
                     <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">show detail</a>
                     </div>
                </div>
            </div>`;
};

function showDetail(m){
    return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                        <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors :</strong> ${m.Actors} </li>
                        <li class="list-group-item"><strong>Genre :</strong> ${m.Genre}</li>
                        <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                      </ul>
                </div>
            </div>
          </div>`;
}



