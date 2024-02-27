      
function iniFrame() {
    if (window.location !== window.parent.location) {
        // The page is in an iFrames
        alert('The page is in an iFrame');
    }
    else {
        // The page is not in an iFrame
        alert('not iframee);
    }
}
 
// Calling iniFrame function
iniFrame();
