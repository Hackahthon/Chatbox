function applyFilters(inputString) {
    var regexpr = [];

    regexpr[0] = /[-a-zA-Z0-9:%_\+.~#?@&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9:%_\+.~#?@&//=]*)?/gi;
    regexpr[1] = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    inputString = parser(
        inputString,
        regexpr,
        "email_url");

    //inputString = parser(
    //    inputString,
    //    ,
    //    "url");

    regexpr[0] = /:\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:\(/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:[p,P]/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:[d,D]/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");
    return inputString;
}

function parser(inputString, expression, parseType) {
    var toReturn = "";
    var regex = new RegExp(expression[0]);

    var foundIndex = inputString.search(regex);
    while (foundIndex > -1) {
        var foundPattern = inputString.match(expression[0]);
        var foundPattern1 = expression.length > 1 ? inputString.match(expression[1]) : [];

        toReturn += inputString.substr(0, foundIndex);
        inputString = inputString.substr(foundIndex, inputString.length - foundIndex);

        var initialPatternLength = foundPattern[0].length;
        var initialPatternLength1 = foundPattern1 != null ? foundPattern1[0].length : 0;
        var isUrl = true;
        switch (parseType) {
            case "url":
                if (foundPattern[0].indexOf("http://") < 0 && foundPattern[0].indexOf("https://") < 0)
                    foundPattern[0] = "http://" + foundPattern[0];
            
                toReturn += '<a href="' + foundPattern[0] + '" target="_blank">' + foundPattern[0] + '</a>';
                break;
            case "email":
                toReturn += '<a href="mailto:' + foundPattern[0] + '">' + foundPattern[0] + '</a>';
            case "email_url":
                if (foundPattern1 != null && foundPattern1[0].indexOf("@") > -1) {
                    isUrl = false;
                    toReturn += '<a href="mailto:' + foundPattern1[0] + '">' + foundPattern1[0] + '</a>';
                } else {
                    if (foundPattern[0].indexOf("http://") < 0 && foundPattern[0].indexOf("https://") < 0)
                        foundPattern[0] = "http://" + foundPattern[0];

                    toReturn += '<a href="' + foundPattern[0] + '" target="_blank">' + foundPattern[0] + '</a>';
                }
                break;
            //case "url":
            //    if (foundPattern[0].indexOf("@") < 0) {
            //        if (foundPattern[0].indexOf("http://") < 0 && foundPattern[0].indexOf("https://") < 0)
            //            foundPattern[0] = "http://" + foundPattern[0];

            //        toReturn += '<a href="' + foundPattern[0] + '" target="_blank">' + foundPattern[0] + '</a>';
            //    }
            //    break;
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

        inputString =
            isUrl
            ? inputString.substr(initialPatternLength, inputString.length - initialPatternLength)
            : inputString.substr(initialPatternLength1, inputString.length - initialPatternLength1);

        foundIndex = inputString.search(regex);

        if (foundIndex < 0)
            toReturn += inputString;
    }
    return toReturn == "" ? inputString : toReturn;
}
