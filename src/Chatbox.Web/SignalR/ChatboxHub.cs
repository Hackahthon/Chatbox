using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using SignalR;
using SignalR.Hubs;

namespace Chatbox.Web.SignalR
{
    [HubName("chatboxHub")]
    public class ChatboxHub : Hub
    {
        private readonly IGroupManager group_;
        private readonly IContext context_;

        public ChatboxHub()
            : this(null, null)
        { }

        public ChatboxHub(IContext ctx, IGroupManager grp)
        {
            context_ = ctx ?? new HttpContextImpl();
            group_ = grp ?? Groups;
        }

        public Task Join(string channelName)
        {
            var name = context_.GetUsername();
            return group_.Add(Context.ConnectionId, channelName).ContinueWith(t => Clients.onJoined(name, channelName));
        }

        public void Message(string channelName, string content)
        {
            var user = context_.GetUsername();
            Clients[channelName].onMessage(user, content, channelName);
        }
    }
}