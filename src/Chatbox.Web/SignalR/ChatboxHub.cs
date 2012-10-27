using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using SignalR.Hubs;

namespace Chatbox.Web.SignalR
{
    [HubName("chatboxHub")]
    public class ChatboxHub : Hub
    {
        public Task Join(string channelName)
        {
            var name = GetUsername();
            return Groups.Add(Context.ConnectionId, channelName).ContinueWith(t => Clients.onJoined(name));
        }

        public void Message(string channelName, string content)
        {
            var user = GetUsername();
            Clients[channelName].onMessage(user, content);
        }

        private string GetUsername()
        {
            var name = HttpContext.Current.User.Identity.Name;
            return name;
        }
    }
}