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
        ChatBox.Domain.Concrete.Twitter _Twitter = new ChatBox.Domain.Concrete.Twitter();

        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Logon(string a)
        {
            _Twitter.Logon(this.Request.Url, "http://chatbox.azurewebsites.net/");
            return RedirectToAction("Chat");
        }

        public ActionResult Chat()
        {
            return View(_Twitter.GetUserDetails());
        }
    }
}
