console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'p2Pc7TRrcc5wvLU82O8IrqSQt',
  consumer_secret: 'xOzVPUqFwXBmVVeDNrWAsI27lnzHD16jdLL71fO8WmswzRqF7c',
  access_token_key: '923816186-DS1ViXE0pYmmn36togE3YxjehUUu4OEvmVv4rmKT',
  access_token_secret: 'j3zy3ofgYxtcP548QN0TIZ5ahVMgnjVKaUPgXgEQqg0sf',
}

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});