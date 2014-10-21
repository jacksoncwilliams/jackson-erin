var buffer = 20; //scroll bar buffer
var iframe = document.getElementById('https://docs.google.com/document/d/1Zm5k7HUNcLVbAnniQxctmQJO2Km6qmf-FAsq_1D5Vs8/pub?embedded=true');

function pageY(elem) {
    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
}

function resizeIframe() {
    var height = document.documentElement.clientHeight;
    height -= pageY(document.getElementById('https://docs.google.com/document/d/1Zm5k7HUNcLVbAnniQxctmQJO2Km6qmf-FAsq_1D5Vs8/pub?embedded=true'))+ buffer ;
    height = (height < 100) ? 100 : height;
    document.getElementById('https://docs.google.com/document/d/1Zm5k7HUNcLVbAnniQxctmQJO2Km6qmf-FAsq_1D5Vs8/pub?embedded=true').style.height = '100px';
}

// .onload doesn't work with IE8 and older.
if (iframe.attachEvent) {
    iframe.attachEvent("onload", resizeIframe);
} else {
    iframe.onload=resizeIframe;
}

window.onresize = resizeIframe;
