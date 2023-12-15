using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GCPL.Startup))]
namespace GCPL
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
