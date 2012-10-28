; (function (win, undefined) {

    var chatService = null;

    var chatChannel = function (chat, name) {
        chatService = chat;

        this.name = name;
        this.sendMessage = function (message) {
            chatService.message(name, message);
        };
    };

    win.ChatChannel = chatChannel;

})(window);