using System.Web;
using System.Web.Optimization;

namespace Trails.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/HikeApp/dist/inline.bundle.js")
                .Include("~/HikeApp/dist/polyfills.bundle.js")
                .Include("~/HikeApp/dist/scripts.bundle.js")
                .Include("~/HikeApp/dist/vendor.bundle.js")
                .Include("~/HikeApp/dist/main.bundle.js"));

            bundles.Add(new ScriptBundle("~/bundles/history-app")
                .Include("~/App/dist/history-bundle.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
