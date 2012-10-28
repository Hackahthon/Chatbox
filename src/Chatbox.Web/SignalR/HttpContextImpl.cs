using System;
using System.Linq;
using System.Web;

namespace Chatbox.Web.SignalR
{
    class HttpContextImpl : IContext
    {
        public string GetUsername()
        {
            return HttpContext.Current.User.Identity.Name;
        }
    }
}
