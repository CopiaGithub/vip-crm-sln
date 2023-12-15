using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using DAL;
using System.Net.Mail;

namespace GCPL
{
    public partial class ResetPassword : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            ForgotPasswordManager objLoginDataAccess = new ForgotPasswordManager();
            Random generator = new Random();



            string SecurityCode = generator.Next(0, 1000000).ToString("D6");
            if (txtemailid.Text != "")
            {
             DataSet  i = objLoginDataAccess.OTP(txtemailid.Text, SecurityCode);

                if (i.Tables[0].Rows.Count > 0)
                {
                    string  Email = i.Tables[0].Rows[0]["email"].ToString();
                    string UserID = i.Tables[0].Rows[0]["UserID"].ToString();
                    if (Email == "Not a User")
                    {
                        Email = i.Tables[0].Rows[0]["email"].ToString();
                    }
                    else
                    {
                        try
                        {
                            Common.SendSMS1(txtemailid.Text, "Your OTP for Password Reset on www.app.bkmist.com is " + SecurityCode + ". Its valid to use only once. Do not share with anyone to protect your account privacy.", this, "OTP");
                        }
                        catch (Exception)
                        {

                            throw;
                        }
                        try
                        {
                            SendEmailUsingGmail(SecurityCode, Email);
                            //ListDictionary replacements = new ListDictionary();
                            //replacements.Add("<%SecurityCode%>", SecurityCode);
                            //bool isEmailed = EmailManager.SendEmailUsingTemplate(ObjList.Email, ConfigurationManager.AppSettings["changepassword"].ToString(), "OTP for your password change at cemachines.com", HostingEnvironment.MapPath("~/EmailTemplates/Otp.txt"), replacements, ConfigurationManager.AppSettings["SmtpServerName"].ToString());

                        }
                        catch (Exception)
                        {

                            throw;
                        }

                        Response.Redirect("ConfirmPassword.aspx?UID=" +UserID + "&identify=" +Crypts.Encrypt(Email));

                    }
                }
            }
        }


        private void SendEmailUsingGmail( string SecurityCode, string Email)
        {
            try
            {
                MailMessage Msg = new MailMessage();
                // Sender e-mail address.
                Msg.From = new MailAddress("tipllms@gmail.com");
                //Msg.From = new MailAddress("test3.harshal@gmail.com");
                // Recipient e-mail address.
                //Msg.To.Add(txtEmailID.Text);
                Msg.To.Add(Email);
                //Msg.To.Add("pareshpanchal412@gmail.com");
                //Msg.To.Add("harshu2012@gmail.com");
                Msg.Subject = "GCPL Password Help";
                Msg.Body = "You have requested to changeGCPL password. Please enter One Time Password given below to change your password. This OTP can be used only once. You should not share this OTP with any one else. This OTP code is " + SecurityCode + "";
                // your remote SMTP server IP.
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                //smtp.Credentials = new System.Net.NetworkCredential("lmstiplapps.2016@gmail.com ", "tipl@2016");//tiplapps@lms_2016
                smtp.Credentials = new System.Net.NetworkCredential("tipllms@gmail.com", "C0p!@5erv!ce5");
                smtp.EnableSsl = true;
                smtp.Send(Msg);
                smtp.Dispose();
                Msg = null;
            }
            catch (Exception ex)
            {
                throw (ex);
            }

        }
    }
}