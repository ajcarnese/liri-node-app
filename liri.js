var twit = require('./keys.js');
var fs = require ('fs');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request')
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
	var query = process.argv[3];
	// 'https://api.spotify.com/v1/search?type=track&q=' + query + '&limit=10'

	spotify.search({ type: 'track', query: song }, function(err, data) {
	    if ( err ) {
	        console.log("You had an error with the Spotify section...");
	        console.log(err)
	        return;
	    }
    var trackInfo = data.tracks.items[0];
   		console.log(trackInfo.artists[0].name)
        console.log(trackInfo.name)
        console.log(trackInfo.album.name)
        console.log(trackInfo.preview_url)
	});
		if (process.argv[3] === "") {
		spotify.search({type: 'track', query: 'the sign'}, function(err, data) {

			console.log(JSON.stringify(data));	artists.album.artists[3].name
	});
		}

}

// // This will show the following information about the song in your terminal/bash window

// // Artist(s)
// // The song's name
// // A preview link of the song from Spotify
// // The album that the song is from
// // if no song is provided then your program will default to

// // "The Sign" by Ace of Base
// //https://api.spotify.com/v1/search?query=the+sign&type=track&market=US&offset=0&limit=20"
// // 

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
