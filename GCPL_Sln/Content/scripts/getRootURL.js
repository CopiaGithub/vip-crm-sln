function getRootURL() {
    var baseURL = (location.href).toLowerCase();

    var rootURL = baseURL.substring(0, baseURL.indexOf('/', 7));
    if (baseURL.indexOf('testserver') != -1) {

        var rootFolderName = baseURL.split('testserver/')[1].split('/')[0];
        rootURL = rootURL + "/testserver/" + rootFolderName + "/";
    } else if (baseURL.indexOf('localhost') == -1) {

        var rootURL = baseURL.substring(0, baseURL.indexOf('/', 8));
        rootURL = rootURL + "/";
    } else {
        // alert(rootURL);
        var rootURL = baseURL.substring(0, baseURL.indexOf('/', 7));
        rootURL = rootURL + "/";
        // rootURL = rootURL + baseURL.substring(baseURL.indexOf('/', 8), baseURL.indexOf('/', baseURL.indexOf('/', 8) + 1)) + "/";
    }

    var abc = window.location.protocol + "//" + window.location.host + "/"

    //You can get the protocol and the host separately, and then join them to get what you need

    //window.location.protocol + "//" + window.location.host + "/"
    //As a sidenote, window.location.pathname would contain the path.
    //alert(abc);
    //return rootURL;
    //return "http://localhost:50720/";
    //return "http://Kmachines.copia21.com/";
    return abc;

}

