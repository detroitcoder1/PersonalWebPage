using curtbrock.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace curtbrock.Controllers
{
    public class HomeController : Controller

       
    {
        private DefaultData db = new DefaultData();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Subscribe(Subscriber s)
        {
            try
            {
                if (ModelState.IsValid)
                    db.Entry(s);
            }
            catch (Exception)
            {

                throw;
            }
            
            return View();
        }
    }
}