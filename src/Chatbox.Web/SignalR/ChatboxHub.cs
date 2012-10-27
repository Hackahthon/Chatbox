using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;

namespace Chatbox.Web.SignalR
{
    [HubName("chatboxHub")]
    public class ChatboxHub : Hub
    {
        public void Join()
        {
            var name = GetUsername();
            Clients.onJoined(name);
        }

        public void Message(string content)
        {
            var user = GetUsername();
            Clients.onMessage(user, content);
        }

        private string GetUsername()
        {
            var name = HttpContext.Current.User.Identity.Name;
            return name;
        }
    }
}