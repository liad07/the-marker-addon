chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    var preimum="www.themarker.com/misc/themarkersmartphoneapp/.premium";
    var key=tabURL
    t=tabURL.indexOf("-")
    if (t==-1){
        document.writeln("not the marker article")
    }

    else{
        key=tabURL.substring(t)
        document.writeln(key);
        window.open("https://"+preimum+key)    }

});