var request = require('request');
var user_id = "1221063701";
var token = "Bearer BQApN10GDLRVmeQ_Ozvh9ySo32dRoSvBC6bUYIzHLD5IgxxgimJZrqwg-b0u65Aiktx1Xt3kqg7Nb5fcVWy31bha1NGON7coQeGMV-XwEnerTW0lPC7uowHSm2IUDZ_4TBYhKm-hEjSRt_G0xw"
var playlists_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlists_url, headers:{"Authorization":token}}, function(err,res){
    if (res) {
        var playlists = JSON.parse(res.body);
        console.log(JSON.stringify(playlists.items, null, " "));
        var playlist_url = playlists.items[0].href;
        request({url:playlist_url, headers:{"Authorization":token}}, function(err,res){
            if (res) {
                var playlist = JSON.parse(res.body);
                console.log("playlist: " + playlist.name);
                playlist.tracks.items.forEach(function(track){
                    console.log(track.track.name);
                });
            }
        })
    }
})
