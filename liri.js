function liri(){	
	var twit = require('./keys.js');
	var fs = require ('fs');
	var twitter = require('twitter');
	var spotify = require('spotify');
	var request = require('request');
	var demands = process.argv[2];

	var client = new twitter({
	  consumer_key: 'p2Pc7TRrcc5wvLU82O8IrqSQt',
	  consumer_secret: 'xOzVPUqFwXBmVVeDNrWAsI27lnzHD16jdLL71fO8WmswzRqF7c',
	  access_token_key: '923816186-DS1ViXE0pYmmn36togE3YxjehUUu4OEvmVv4rmKT',
	  access_token_secret: 'j3zy3ofgYxtcP548QN0TIZ5ahVMgnjVKaUPgXgEQqg0sf',

	});


	//this function should use the twitter package to show last 20 tweets and when they were posted
	function tweetMe(){
		client.get('statuses/user_timeline', { screen_name: 'CodingCoconut', count: 20 }, function(error, tweets, response) {
	  	if (!error) {
	  		console.log("--Here are my last 20 tweets--")
	  		console.log("*********************")
	  		console.log("(Starting with the most recent tweet)")
	  		for (i=0; i < tweets.length; i++){
	  		console.log("Tweet #" + (i+1) + ":")
	    	console.log("This tweet is from: " + tweets[i].created_at) 
	    	console.log("This tweet says: " + tweets[i].text);
	    	console.log("*********************")
	  	}

	  }else {
	  	console.log("Meow! (I think a cat ate your tweets... )" + error)
	  }
	});
	}

	// // this function should use the spotify package to show the following information about the track listed after the demand:
	function spotifyMe(){
			var track = process.argv[3];

			spotify.search({ type: 'track', query: track }, function(err, data) {
		    if ( err ) {
		        console.log('Something went wrong: ' + err);
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
// // this function should use the request package & omdb to show the following behavior of the movie title listed after the demand:
	function movieMe() {
			 var movieName = process.argv[3];
		 var mrNobody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json";
		 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";

		 
			if(process.argv[3] === undefined){
					request(mrNobody, function(error,response,body){
						console.log("Title: " + JSON.parse(body).Title) 
						console.log("Released in: " + JSON.parse(body).Year) 
						console.log("IMDB rating: " + JSON.parse(body).imdbRating)
						console.log("Country: " + JSON.parse(body).Country) 
						console.log("Language: " + JSON.parse(body).Language) 
						console.log("Plot: " + JSON.parse(body).Plot) 
						console.log("Starring: " + JSON.parse(body).Actors) 
						console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating) 
						console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL)
		 			});
			}else {
				 request(queryUrl, function(error,response,body){
							console.log("Title: " + JSON.parse(body).Title) 
							console.log("Released in: " + JSON.parse(body).Year) 
							console.log("IMDB rating: " + JSON.parse(body).imdbRating)
							console.log("Country: " + JSON.parse(body).Country) 
							console.log("Language: " + JSON.parse(body).Language) 
							console.log("Plot: " + JSON.parse(body).Plot) 
							console.log("Starring: " + JSON.parse(body).Actors) 
							console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating) 
							console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL)
				  })
			}
	};

	//this function should replace the command given "do-what-it-says" and replace it with the command written in random.txt
	function obeyMe() {
			fs.readFile('random.txt', 'utf8', function(err, data) {
				var splitArr = data.split(',');
				(process.argv).splice(2, 1, splitArr[0], splitArr[1])
				console.log("*****************");
				console.log("I shall obey the sacred words of random.txt..")
				console.log("*****************");

				liri();

		})
	}

	if (demands == "my-tweets"){
		tweetMe();
	}

	if (demands == "spotify-this-song"){
		spotifyMe();
	}

	if (demands == "movie-this"){
		movieMe();
	}

	if (demands == "do-what-it-says") {
		obeyMe();
	}
}
liri();