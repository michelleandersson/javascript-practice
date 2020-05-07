//HOW DO I GET THE SEARCH TO CLEAR AND NOT SHOW MULTIPLE MOVIES IN A ROW? 

$('form').submit(function(event) {
    // Stop the form from submitting
    event.preventDefault();
  
    // Get The value from the form
    var movieName = $('#search').val();
    var movieURL = "https://www.omdbapi.com/?apikey=38fdb7c5&t="+movieName;
    let movieData = $('<ul></ul>'); 
    var movieOptions = {
      s: "",
  
    };
    let moviePoster =  $('<ul></ul>')
  
    function displayMovies(data) {
    console.log(data);
        let movies = (`<h1>${data.Title}</h1>
        <p> <strong>Year Released:</strong> ${data.Year}</p>
        <p><strong>Actors: </strong>${data.Actors}</p>
        <P><strong>Plot: </strong>${data.Plot}</p>`);  
        movieData.append(movies); 

        let poster = `<img src="${data.Poster}"/>`;
        moviePoster.append(poster); 

      $('#movieInformation').append(movieData);
      $('#moviePoster').append(moviePoster);
  
    }; 
    $.getJSON(movieURL, movieOptions, displayMovies);// end getJSON
  
  }); // end submit function