var request = require('request');
var user_id = "1221063701";
var token = "Bearer BQCk-LdPiCf_MAilX2I-q28xRNqPE3j6xild3YWYTyGJ4MQwLgonIr8ccxpmeDNITCmKSHj9zhklMW4_QPlzttX1Is2p1v57ASjQTh0CGJKevmdIg1KY4hlZnyNeu98MCoFXnL3aijldLUwXCA"
var playlists_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
	if (res){
		var playlists=JSON.parse(res.body);	
		var playlist_url = playlists.items[0].href;
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
			if (res){
				var playlist = JSON.parse(res.body);
				console.log("playlist: " + playlist.name);
				playlist.tracks.items.forEach(function(track){
					console.log(track.track.name);
				});
			}
		})		
	}
})

