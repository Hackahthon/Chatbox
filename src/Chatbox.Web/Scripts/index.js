﻿(function ($) {
    "use strict";

    function newChannelClick() {
        var channelName = $('#newChannelName').val();
        if (chatHost.channels[channelName] === undefined) {
            channelName = channelName.replace(/[^A-z0-9\-_]/, '_');
            setupChannel(channelName);
            $("#tabs").tabs('select', channelName);
        }
    };
    var unreadMessagesInChannels = {};
    function addChannelTab(channelName) {
        $('#tabs ul').append("<li><a href='#tabs-" + channelName + "'>" + channelName + "</a></li>");
        $('#tabs').append("<div id='tabs-" + channelName + "'><div id='log-" + channelName + "' class='log'></div></div>");
    };
    var closeTab = function (e) {
        var channelCount = 0;
        for (var x in chatHost.channels)
            channelCount++;
        if (channelCount > 1) {
            var victim = $(e).data('id');
            $('#tabs-' + victim).remove();
            $('a[href="#tabs-' + victim + '"]').parent().remove();
            $('#tabs').tabs('refresh');

            delete chatHost.channels[victim];
        }
    };

    function setupChannel(channelName) {
        chatHost.joinChannel(channelName);
        addChannelTab(channelName);
        $('#text').css("display", "block");
        $("#tabs").tabs(
        {
            show: true,

            activate: function (event, ui) {
                var activatedChannelName = $(ui.newPanel).attr('id').replace("tabs-", "");
                chatHost.switchChannel(activatedChannelName);
                unreadMessagesInChannels[activatedChannelName] = 0;
                $("a[href='#tabs-" + activatedChannelName + "']").text(activatedChannelName);
            },
            create: function (event, ui) {

            }
        });
        $("#tabs").tabs("refresh");

        $('#tabs li').each(function (index, elem) {
            var createdChannelTab = $(elem).attr('aria-controls').replace("tabs-", "");
            if ($("div", elem).length == 0)
                $(elem).append("<div class='icsu' data-id='" + createdChannelTab + "' onclick='closeTab(this);'>x</div>");
        });
    };

    window.closeTab = closeTab;

    var chat = $.connection.chatboxHub;
    
    var myName = '@Context.User.Identity.Name';
    var channelName = '@Model';

    var queue = [];
    var reverseQueue = [];

    chat.onJoined = function (name, channelName) {
        var log = $('#log-' + channelName);
        log.append('<span> -- ' + name + ' has joined the conversation.</span>');
        log.scrollTop(log[0].scrollHeight);
    };

    chat.onMessage = function (name, text, channelName) {
        var log = $('#log-' + channelName);
        log.append('<div class="chatline"><div class="user">' + name + '</div><div class="bubble">' + applyFilters(text) + '</div></div>');
        log.scrollTop(log[0].scrollHeight);
        if ((unreadMessagesInChannels[channelName] == null || unreadMessagesInChannels[channelName] == undefined) && name != myName) {
            unreadMessagesInChannels[channelName] = 1;
        }
        else if (name != myName)
            unreadMessagesInChannels[channelName]++;

        if (unreadMessagesInChannels[channelName] > 0 && chatHost.activeChannel.name != channelName)
            $("a[href='#tabs-" + channelName + "']").text(channelName +" (" +unreadMessagesInChannels[channelName]+")");
    };

    $('#text').on('keypress', function (evt) {
        if (evt.which == 13) {
            var input = $(this);
            var text = input.val();
            if (text[0] === ' ')
                text += '&nbsp;';
            if (text !== "") {
                queue.push(text);
                chat.message(chatHost.activeChannel.name, text);
                input.val('');
            }
        }
    });

    $('#newChannelName').on('keypress', function (evt) {
        if (evt.which == 13) {
            newChannelClick();
            $('#newChannelName').val('');
        }
    });

    $('#text').on('keyup', function (evt) {
        if (evt.which == 38 && queue.length > 0) {
            var input = $(this);
            var text = queue.pop();
            reverseQueue.push(text);
            input.val(text);
            evt.preventDefault();
            evt.stopPropagation();
        }
        else if (evt.which == 40 && reverseQueue.length > 0) {
            var input = $(this);
            var text = reverseQueue.pop();
            queue.push(text);
            input.val(reverseQueue[reverseQueue.length-1]);
            evt.preventDefault();
            evt.stopPropagation();
        }
    });

    $.connection.hub.start().done(function () {
        $('#text').val('');
        $('#text').removeAttr('disabled');

        chat.join(channelName);
    });

})(jQuery);
