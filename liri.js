var twit = require('./keys.js');
var fs = require ('fs');
var twitter = require('twitter');
var spotifyWebApi = require('spotify-web-api-node');
var spotify = require('spotify');
var request = require('request');
var demands = process.argv[2];

var client = new twitter({
  consumer_key: 'p2Pc7TRrcc5wvLU82O8IrqSQt',
  consumer_secret: 'xOzVPUqFwXBmVVeDNrWAsI27lnzHD16jdLL71fO8WmswzRqF7c',
  access_token_key: '923816186-DS1ViXE0pYmmn36togE3YxjehUUu4OEvmVv4rmKT',
  access_token_secret: 'j3zy3ofgYxtcP548QN0TIZ5ahVMgnjVKaUPgXgEQqg0sf',

});


//this command should use the twitter package to show last 20 tweets and when they were posted
if (demands == "my-tweets") {
client.get('statuses/user_timeline', { screen_name: 'CodingCoconut', count: 20 }, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }else {
  	console.log("you did something wrong!")
  	console.log(error);
  }
});
}
//currently, the twitter code produces a lot of object data.  
//NEED TO FIGURE OUT HOW TO WHITTLE IT DOWN

// // this command should use the spotify package to show the following information about the track listed after the demand:
if (demands == "spotify-this-song"){
	var track = process.argv[3];

		spotify.search({ type: 'track', query: track }, function(err, data) {
	    if ( err ) {
	        console.log('Error: ' + err);
	        return;
	    }
	    
	    var trackInfo = data.tracks.items[0];
	   			console.log("--Here is the best result for your search--")
	   			console.log("Artist: " + trackInfo.artists[0].name)
	        console.log("Track Name: " + trackInfo.name)
	        console.log("Album: " + trackInfo.album.name)
       		console.log("Preview Link: " + trackInfo.preview_url)
		});

			if (process.argv[3] === undefined) {
				spotify.search({ type: 'track' , query: 'ace of base the sign'}, function (err, data) {
					    var trackInfo = data.tracks.items[0];
	   			console.log("--No Song? You must've missed 'The Sign.' Here you go!--")
	   			console.log("Artist: " + trackInfo.artists[0].name)
	        console.log("Track Name: " + trackInfo.name)
	        console.log("Album: " + trackInfo.album.name)
	        console.log("Preview Link: " + trackInfo.preview_url)
				});
			}
}


// // this command should use the request package & omdb to show the following behavior of the movie title listed after the demand:
if (demands == "movie-this"){
	
	 var movieName = process.argv[3];
	 var mrNobody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json";
	 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";

	 request(queryUrl, function(error,response,body){
			console.log(JSON.parse(body).Title, 
				JSON.parse(body).Year, 
				JSON.parse(body).imdbRating, 
				JSON.parse(body).Country, 
				JSON.parse(body).Language, 
				JSON.parse(body).Plot, 
				JSON.parse(body).Actors, 
				JSON.parse(body).tomatoRating, 
				JSON.parse(body).tomatoURL
				);
	 });
		
		if(process.argv[3] === undefined){
				request(mrNobody, function(error,response,body){
				console.log(JSON.parse(body).Title, 
					JSON.parse(body).Year, 
					JSON.parse(body).imdbRating, 
					JSON.parse(body).Country, 
					JSON.parse(body).Language, 
					JSON.parse(body).Plot, 
					JSON.parse(body).Actors, 
					JSON.parse(body).tomatoRating, 
					JSON.parse(body).tomatoURL)
				});
		}
}

// // Title of the movie.
// // Year the movie came out.
// // IMDB Rating of the movie.
// // Country where the movie was produced.
// // Language of the movie.
// // Plot of the movie.
// // Actors in the movie.
// // Rotten Tomatoes Rating.
// // Rotten Tomatoes URL.
// }

// // this command should run whatever is said in the random.txt file(spotify-this-song,"I Want it that way") using the fs package.
// if (demands == "do-what-it-says")
