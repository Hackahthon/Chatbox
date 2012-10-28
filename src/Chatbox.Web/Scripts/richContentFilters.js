function applyFilters(inputString) {
    var regexpr = [];

    regexpr[0] = /[-a-zA-Z0-9:%_\+.~#?@&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9:%_\+.~#?@&//=]*)?/gi;
    regexpr[1] = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    inputString = parser(
        inputString,
        regexpr,
        "email_url");

    regexpr[0] = /:\)\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /\=\)\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = />:\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

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

    regexpr[0] = /<3/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /X\(/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:">/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:-</;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:-[o,O]/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /@-\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /\|-\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:-\//;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /B-\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /;\)\)/;
    inputString = parser(
        inputString,
        regexpr,
        "emoticon");

    regexpr[0] = /:-[s,S]/;
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
                        toReturn += '<img src="/Content/Images/Emoticons/tongue.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "<3":
                        toReturn += '<img src="/Content/Images/Emoticons/chu.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "/:)":
                        toReturn += '<img src="/Content/Images/Emoticons/huh.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "X(":
                        toReturn += '<img src="/Content/Images/Emoticons/pissed.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":\">":
                        toReturn += '<img src="/Content/Images/Emoticons/blush.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":-<":
                        toReturn += '<img src="/Content/Images/Emoticons/gasp.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":-O":
                        toReturn += '<img src="/Content/Images/Emoticons/ooo.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "@-)":
                        toReturn += '<img src="/Content/Images/Emoticons/gya.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "|-)":
                        toReturn += '<img src="/Content/Images/Emoticons/zzz.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":-/":
                        toReturn += '<img src="/Content/Images/Emoticons/whut.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":-\"":
                        toReturn += '<img src="/Content/Images/Emoticons/whistle.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "B-)":
                        toReturn += '<img src="/Content/Images/Emoticons/shades.gif" style="vertical-align: absmiddle" />';
                        break;
                    case "=))":
                        toReturn += '<img src="/Content/Images/Emoticons/lol.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ";))":
                        toReturn += '<img src="/Content/Images/Emoticons/heehee.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":))":
                        toReturn += '<img src="/Content/Images/Emoticons/eheehe.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ">:)":
                        toReturn += '<img src="/Content/Images/Emoticons/evil.gif" style="vertical-align: absmiddle" />';
                        break;
                    case ":-S":
                        toReturn += '<img src="/Content/Images/Emoticons/eh.gif" style="vertical-align: absmiddle" />';
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
