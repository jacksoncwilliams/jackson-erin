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
