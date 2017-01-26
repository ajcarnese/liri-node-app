var twit = require('./keys.js');
var fs = require ('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request')
var demand = process.argv[2];


//this command should use the twitter package to show last 20 tweets and when they were posted
if (demands == "my-tweets") {
// 	client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });
}


// this command should use the spotify package to show the following information about the track listed after the demand:
if (demands == "spotify-this-song"){

}

// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to

// "The Sign" by Ace of Base
//https://api.spotify.com/v1/search?query=the+sign&type=track&market=US&offset=0&limit=20"


// this command should use the request package & omdb to show the following behavior of the movie title listed after the demand:
if (demands == "movie-this"){
	for (var i=3; i < process.argv.length; i++){
    if (i == 2) movieName = movieName + process.argv[i];
    else movieName = movieName + "+" + process.argv[i];
}

// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// Rotten Tomatoes Rating.
// Rotten Tomatoes URL.
}

// this command should run whatever is said in the random.txt file(spotify-this-song,"I Want it that way") using the fs package.
if (demands == "do-what-it-says")
