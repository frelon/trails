﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Trails.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if(Request.IsAuthenticated)
            {
                return RedirectToAction("Map");
            }

            return View();
        }

        [Authorize]
        public ActionResult Map()
        {
            ViewBag.Title = "Hike";

            return View();
        }

        [Authorize]
        public ActionResult Trails()
        {
            ViewBag.Title = "Trails";

            return View();
        }
    }
}