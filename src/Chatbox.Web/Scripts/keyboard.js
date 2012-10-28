; (function (win, undefined) {

    Mousetrap.bind('ctrl+1', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 1) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+2', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 2) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+3', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 3) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+4', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 4) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+5', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 5) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+6', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 6) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+7', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 7) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+8', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 8) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+9', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 9) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

    Mousetrap.bind('ctrl+0', function () {
        var nth = 0;
        for (var name in win.chatHost.channels) {
            ++nth;
            if (nth == 10) {
                $('#tabs').tabs('select', win.chatHost.channels[name].name);
                return;
            }
        }
    });

})(window);