function getElement(aID)
    {
        return (document.getElementById) ?
            document.getElementById(aID) : 

document.all[aID];
    }

    function getIFrameDocument(aID){ 
        var rv = null; 
        var frame=getElement(aID);
        // if contentDocument exists, W3C 

compliant (e.g. Mozilla) 
        if (frame.contentDocument)
            rv = frame.contentDocument;
        else // bad Internet Explorer  ;)
            rv = document.frames[aID].document;
        return rv;
    }

    function adjustMyFrameSize()
    {
        var frame = getElement

("myFrame");
        var frameDoc = getIFrameDocument

("myFrame");
        frame.height = frameDoc.body.offsetHeight;
    }

function adjustMyFrameSize()
{
var frame = getElement("myFrame");
var frameDoc = getIFrameDocument("myFrame");
if (navigator.appName == "Microsoft Internet Explorer")
frame.style.height = frameDoc.body.scrollHeight+'px';
else
frame.style.height = frameDoc.body.offsetHeight+'px';
}
