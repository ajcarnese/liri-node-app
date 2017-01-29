console.log('this is loaded');
console.log("Welcome to LIRI!");

var twitter = require('twitter');

var client = new twitter({
	  consumer_key: 'p2Pc7TRrcc5wvLU82O8IrqSQt',
	  consumer_secret: 'xOzVPUqFwXBmVVeDNrWAsI27lnzHD16jdLL71fO8WmswzRqF7c',
	  access_token_key: '923816186-DS1ViXE0pYmmn36togE3YxjehUUu4OEvmVv4rmKT',
	  access_token_secret: 'j3zy3ofgYxtcP548QN0TIZ5ahVMgnjVKaUPgXgEQqg0sf',

	});

exports.twitterKeys = client;

