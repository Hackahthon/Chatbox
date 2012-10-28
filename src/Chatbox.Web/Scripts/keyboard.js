; (function (win, undefined) {

    for (var i = 0; i < 10; ++i) {
        Mousetrap.bind('ctrl+' + i, function () {
            $('#tabs').tabs({ active: i });
        });
    }

})(window);