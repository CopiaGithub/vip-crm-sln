using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GCPL.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            if (Request.Cookies["UserInfo"] == null)
            {
                return Redirect("login.aspx");
            }
            else
            {
                return RedirectToAction("Index", "Home");

            }
        }
    }
}