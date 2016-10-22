var ytdl = require('ytdl-core');
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    ytdl.getInfo(tablink, function(err, info) {

        if (err) return done(err);
        alert(info.description);
        var a = document.getElementById('tel'); //or grab it by tagname etc
        a.href = info.formats[0].url;
        a.download=info.title;
    });

});


