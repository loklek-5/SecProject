var ytdl = require('ytdl-core');
var simpleJSONFilter = require('simple-json-filter');
var sjf = new simpleJSONFilter();
var filter = {resolution: null};
var filter2 = {container: 'mp4'};
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    ytdl.getInfo(tablink, function(err, info) {

        if (err) return done(err);
        //2 filter  partie audio 
        var result = sjf.exec(filter, info.formats);
        var result2 = sjf.exec(filter2, result);
        for(var i in result2){
        	var audioUrl = result2[i].url;
        }
        alert(info.description);

        var a = document.getElementById('tel'); //or grab it by tagname etc
        a.href = info.formats[0].url;
        a.download=info.title;
        a.setAttribute('name', "democlass");

        var b = document.getElementById('audio'); //or grab it by tagname etc
        console.log(audioUrl);
        b.href = audioUrl;
        b.download=info.title+".mp3";
    });

});


