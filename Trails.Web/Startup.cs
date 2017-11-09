using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Trails.Web.Startup))]
namespace Trails.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
