function applyFilters(inputString) {
    inputString = urlParser(inputString);
    return inputString;
}

function urlParser(inputString) {
    var toReturn = "";
    var expr = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expr);

    var foundIndex = inputString.search(regex);
    while (foundIndex > -1) {
        var s = new String();
        var foundUrl = inputString.match(expr);

        toReturn += inputString.substr(0, foundIndex);
        inputString = inputString.substr(foundIndex, inputString.length - foundIndex);

        var initialUrlLength = foundUrl[0].length;
        if (foundUrl[0].indexOf("http://") < 0)
            foundUrl[0] = "http://" + foundUrl[0];
            
        toReturn += '<a href="' + foundUrl[0] + '">' + foundUrl[0] + '</a>';
        inputString = inputString.substr(initialUrlLength, inputString.length - initialUrlLength);

        foundIndex = inputString.search(regex);

        if (foundIndex < 0)
            toReturn += inputString;
    }
    return toReturn == "" ? inputString : toReturn;
}