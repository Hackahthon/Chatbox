; (function (win, undefined) {

    var chat = $.connection.chatboxHub;

    var channels = [];

    var join = function (name) {
        win.chatHost.activeChannel = new win.ChatChannel(chat, name);
        channels.push(win.chatHost.activeChannel);
        chat.join(name);
    };

    var chatHost = {
        joinChannel: join,
        activeChannel: null
    };

    win.chatHost = chatHost;

})(window);