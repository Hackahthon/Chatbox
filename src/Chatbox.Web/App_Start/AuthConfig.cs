using System;
using System.Linq;
using Microsoft.Web.WebPages.OAuth;

namespace Chatbox.Web
{
    public static class AuthConfig
    {
        public static void RegisterAuth()
        {
            // To let users of this site log in using their accounts from other sites such as Microsoft, Facebook, and Twitter,
            // you must update this site. For more information visit http://go.microsoft.com/fwlink/?LinkID=252166

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "",
            //    clientSecret: "");

            OAuthWebSecurity.RegisterTwitterClient(
                consumerKey: "Bi1aDmdE4uftKsbWprnLA",
                consumerSecret: "Ym0GTfRiLp6qs6GJMmfcxylqcwZiUaSbyigiD2LdA");

            OAuthWebSecurity.RegisterFacebookClient(
                appId: "297318173701632",
                appSecret: "8aa11ea66a70b5ad4fd7b0aa7d69ba59");

            OAuthWebSecurity.RegisterClient(
                new GithubOAuthClient.GithubClient("ab13bae77e85ba6454be", "5dd038ad8571884d92544baa2a06c112abc7c3f9")
                );

            OAuthWebSecurity.RegisterGoogleClient();
        }
    }
}
