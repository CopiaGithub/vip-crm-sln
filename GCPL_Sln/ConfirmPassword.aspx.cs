using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GCPL
{
    public partial class ConfirmPassword : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.QueryString["UID"] != null && Request.QueryString["UID"] != "0" && Request.QueryString["identify"] != null && Request.QueryString["identify"] != "")
                {
                    try
                    {
                        Session["userId"] = Request.QueryString["UID"].ToString();
                    }
                    catch (Exception ex)
                    {

                    }
                    try
                    {
                        Session["EmailID"] = Crypts.Decrypt(Request.QueryString["identify"].ToString());
                    }
                    catch
                    {
                    }
                }
            }

        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            if (txtpwd.Text == txtrepwd.Text)
            {
                ForgotPasswordManager objManager = new ForgotPasswordManager();

                int Result = objManager.PostResetPasswordWithOtp(txtpwd.Text, Session["EmailID"].ToString(), txtOTP.Text, Session["userId"].ToString());
                if (Result > 0)
                {
                    lbssuccessMsg.Text = "Password has been updated successfully.";
                    btnReset.Visible = false;
                    lnkGotoLoginPage.Visible = true;

                }
            }
        }

        protected void lnkGotoLoginPage_Click(object sender, EventArgs e)
        {
            lbssuccessMsg.Text = "";
            Response.Redirect("Login.aspx");
        }
    }
}