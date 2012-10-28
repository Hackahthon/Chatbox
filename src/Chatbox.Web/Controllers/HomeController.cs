using System;
using System.Linq;
using System.Web.Mvc;

namespace Chatbox.Web.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}
