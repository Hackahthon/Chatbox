using System;
using System.Linq;
using System.Reflection;
using Chatbox.Web.SignalR;
using Moq;
using SignalR;
using SignalR.Hubs;
using Xunit;

namespace Chatbox.Facts
{
    public class ChatHubFacts
    {
        [Fact]
        public void Chathub_has_hubname_attribute()
        {
            var hub = new ChatboxHub();
            var type = hub.GetType();
            var attributes = type.GetCustomAttributes(typeof(HubNameAttribute));
            Assert.True(attributes.Any());
        }

        [Fact]
        public void Chathub_has_hubname_chatboxHub()
        {
            var hub = new ChatboxHub();
            var type = hub.GetType();
            var attributes = type.GetCustomAttributes(typeof(HubNameAttribute));
            Assert.Equal("chatboxHub", (attributes.First() as HubNameAttribute).HubName);
        }
    }
}
