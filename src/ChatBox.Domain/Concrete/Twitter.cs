using ChatBox.Domain.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Twitterizer;

namespace ChatBox.Domain.Concrete
{
    public class Twitter : ISocialize
    {
        public string Logon(Uri request, string returnUrl)
        {
            UriBuilder builder = new UriBuilder(request);
            builder.Query = string.Concat(
                builder.Query,
                string.IsNullOrEmpty(builder.Query) ? string.Empty : "&",
                "ReturnUrl=",
                returnUrl);

            string token = OAuthUtility.GetRequestToken(
                "Bi1aDmdE4uftKsbWprnLA",
                "Ym0GTfRiLp6qs6GJMmfcxylqcwZiUaSbyigiD2LdA",
                builder.ToString()).Token;

            return OAuthUtility.BuildAuthorizationUri(token, true).ToString();
        }

        public string GetUserDetails()
        {
            TwitterResponse<TwitterUser> userResponse = TwitterUser.Show("adrianeduard1");
            return userResponse.RequestUrl;
        }
    }
}