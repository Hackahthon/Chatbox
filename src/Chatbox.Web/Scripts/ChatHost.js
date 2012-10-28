; (function (win, undefined) {

    var chat = $.connection.chatboxHub;

    var channels = {};

    var join = function (name) {
        win.chatHost.activeChannel = new win.ChatChannel(chat, name);
        channels[name] = win.chatHost.activeChannel;
        chat.join(name);
    };

    var switchChannel = function (name) {
        win.chatHost.activeChannel = channels[name];
    }

    var chatHost = {
        joinChannel: join,
        activeChannel: null,
        switchChannel: switchChannel,
        channels: channels
    };

    win.chatHost = chatHost;

})(window);