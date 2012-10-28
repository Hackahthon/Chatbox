using System;
using System.Linq;
using System.Web.Mvc;

using Chatbox.Web.Controllers;
using Xunit;

namespace Chatbox.Facts
{

    public class HomeControllerFacts
    {
        [Fact]
        public void Index_has_authorize_attribute()
        {
            var controller = new HomeController();
            var type = controller.GetType();
            var methodInfo = type.GetMethod("Index", new Type[] { });
            var attributes = methodInfo.GetCustomAttributes(typeof(AuthorizeAttribute), true);
            Assert.True(attributes.Any());
        }
    }
}
