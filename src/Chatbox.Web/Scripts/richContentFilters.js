function applyFilters(inputString) {
    //inputString = parser(
    //    inputString,
    //    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    //    "email");
    inputString = parser(
        inputString,
        /[-a-zA-Z0-9:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/gi,
        "url");
    inputString = parser(
        inputString,
        /:\)/,
        "emoticon");
    inputString = parser(
        inputString,
        /:\(/,
        "emoticon");
    inputString = parser(
        inputString,
        /:[p,P]/,
        "emoticon");
    inputString = parser(
        inputString,
        /:[d,D]/,
        "emoticon");
    return inputString;
}

function parser(inputString, expression, parseType) {
    var toReturn = "";
    var regex = new RegExp(expression);

    var foundIndex = inputString.search(regex);
    while (foundIndex > -1) {
        var foundPattern = inputString.match(expression);

        toReturn += inputString.substr(0, foundIndex);
        inputString = inputString.substr(foundIndex, inputString.length - foundIndex);

        var initialPatternLength = foundPattern[0].length;
        switch (parseType) {
            case "url":
                if (foundPattern[0].indexOf("http://") < 0)
                    foundPattern[0] = "http://" + foundPattern[0];
            
                toReturn += '<a href="' + foundPattern[0] + '" target="_blank">' + foundPattern[0] + '</a>';
                break;
            case "email":
                toReturn += '<a href="mailto:' + foundPattern[0] + '">' + foundPattern[0] + '</a>';
                break;
            case "emoticon":
                switch (foundPattern[0].toUpperCase()) {
                    case ":)":
                        toReturn += '<img src="/Content/Images/Emoticons/smile.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":(":
                        toReturn += '<img src="/Content/Images/Emoticons/sad.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":D":
                        toReturn += '<img src="/Content/Images/Emoticons/hee.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":P":
                        toReturn += '<img src="/Content/Images/Emoticons/lol.gif" style="vertical-align: absmiddle" />';
                        break;
                }
                break;
        }

        inputString = inputString.substr(initialPatternLength, inputString.length - initialPatternLength);

        foundIndex = inputString.search(regex);

        if (foundIndex < 0)
            toReturn += inputString;
    }
    return toReturn == "" ? inputString : toReturn;
}
