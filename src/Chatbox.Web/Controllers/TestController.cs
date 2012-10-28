using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Chatbox.Web.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/

        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Logon()
        {
            ChatBox.Domain.Concrete.Twitter twitter = new ChatBox.Domain.Concrete.Twitter();
            return Redirect(twitter.Logon(this.Request.Url, "http://chatbox.azurewebsites.net/"));
        }
    }
}
