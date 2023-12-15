using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DAL;
using System.Text;

namespace GCPL
{
    public partial class login : System.Web.UI.Page
    {


        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

            }
        }


        //public static string GetBaseURL()
        //{
        //    try
        //    {
        //        string tmpStr = "http://" + HttpContext.Current.Request.Url.Host;
        //        if (!HttpContext.Current.Request.Url.IsDefaultPort)
        //            tmpStr += ":" + HttpContext.Current.Request.Url.Port;
        //        //  tmpStr += "/" + HttpContext.Current.Request.Url.LocalPath.Split('/')[1].ToString();
        //        return tmpStr + "" + HttpContext.Current.Request.Url.LocalPath.Split('/')[0].ToString();
        //        //string tmpStr = HttpContext.Current.Request.Url.ToString().Substring(0, HttpContext.Current.Request.Url.OriginalString.LastIndexOf(HttpContext.Current.Request.FilePath.Substring(HttpContext.Current.Request.FilePath.LastIndexOf("/"))));
        //        //return HttpContext.Current.Request.Url.ToString().Substring(0, HttpContext.Current.Request.Url.OriginalString.LastIndexOf(HttpContext.Current.Request.FilePath.Substring(HttpContext.Current.Request.FilePath.LastIndexOf("/"))));
        //    }
        //    catch (Exception)
        //    {
        //        return null;
        //    }
        //}

        protected void Unnamed_Click(object sender, EventArgs e)
        {
            var user = new TestCookie();
            DataSet dsLogin = GetUserLogin(txtuser.Text, Crypts.Encrypt(txtpass.Text));
            if (dsLogin != null)
            {

                if (dsLogin != null && dsLogin.Tables[0].Rows.Count > 0)
                {
                    if (Convert.ToInt32(dsLogin.Tables[0].Rows[0]["UserID"]) != 0)
                    {
                        user.UserID = dsLogin.Tables[0].Rows[0]["UserID"].ToString();
                    }
                    else
                    {
                        user.UserID = "0";
                    }
                    if (dsLogin.Tables[0].Rows[0]["Name"].ToString() != "")
                    {
                        user.UserName = dsLogin.Tables[0].Rows[0]["Name"].ToString();
                    }
                    else
                    {
                        user.UserName = "";
                    }
                    if (Convert.ToInt32(dsLogin.Tables[0].Rows[0]["RoleID"]) != 0)
                    {
                        user.RoleID = dsLogin.Tables[0].Rows[0]["RoleID"].ToString();
                    }
                    else
                    {
                        user.RoleID = "0";
                    }
                    if (Convert.ToInt32(dsLogin.Tables[0].Rows[0]["DealerID"]) != 0)
                    {
                        user.DealerID = dsLogin.Tables[0].Rows[0]["DealerID"].ToString();
                    }
                    else
                    {
                        user.DealerID = "0";
                    }

                    if (dsLogin.Tables[0].Rows[0]["DealerCity"].ToString() != "")
                    {
                        user.City = dsLogin.Tables[0].Rows[0]["DealerCity"].ToString();
                    }
                    else
                    {
                        user.City = "";
                    }

                    if (dsLogin.Tables[0].Rows[0]["PriceGroup"].ToString() != "")
                    {
                        user.PriceGroup = dsLogin.Tables[0].Rows[0]["PriceGroup"].ToString();
                    }
                    else
                    {
                        user.PriceGroup = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["RegionStateId"].ToString() != "")
                    {
                        user.RegionStateId = dsLogin.Tables[0].Rows[0]["RegionStateId"].ToString();
                    }
                    else
                    {
                        user.RegionStateId = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["RoleName"].ToString() != "")
                    {
                        user.RoleName = dsLogin.Tables[0].Rows[0]["RoleName"].ToString();
                    }
                    else
                    {
                        user.RoleName = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["DesignationID"].ToString() != "")
                    {
                        user.DesignationID = dsLogin.Tables[0].Rows[0]["DesignationID"].ToString();
                    }
                    else
                    {
                        user.DesignationID = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["BusinessEntityID"].ToString() != "")
                    {
                        user.BusinessEntityID = dsLogin.Tables[0].Rows[0]["BusinessEntityID"].ToString();
                    }
                    else
                    {
                        user.BusinessEntityID = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["AccountID"].ToString() != "")
                    {
                        user.AccountID = dsLogin.Tables[0].Rows[0]["AccountID"].ToString();
                    }
                    else
                    {
                        user.AccountID = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["AccessModules"].ToString() != "")
                    {
                        user.AccessModules = "";
                    }
                    else
                    {
                        user.AccessModules = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["EmployeeID"].ToString() != "")
                    {
                        user.EmployeeID = dsLogin.Tables[0].Rows[0]["EmployeeID"].ToString();
                    }
                    else
                    {
                        user.EmployeeID = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["Email"].ToString() != "")
                    {
                        user.Email = dsLogin.Tables[0].Rows[0]["Email"].ToString();
                    }
                    else
                    {
                        user.Email = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["GroupEntityID"].ToString() != "")
                    {
                        user.GroupEntityID = dsLogin.Tables[0].Rows[0]["GroupEntityID"].ToString();
                    }
                    else
                    {
                        user.GroupEntityID = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["IsBusinessEntity"].ToString() != "")
                    {
                        user.IsBusinessEntity = dsLogin.Tables[0].Rows[0]["IsBusinessEntity"].ToString();
                    }
                    else
                    {
                        user.IsBusinessEntity = "";
                    }
                    if (dsLogin.Tables[0].Rows[0]["ParentDealerID"].ToString() != "")
                    {
                        user.ParentDealerID = dsLogin.Tables[0].Rows[0]["ParentDealerID"].ToString();
                    }
                    else
                    {
                        user.ParentDealerID = "";
                    }

                    var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();


                    var json = serializer.Serialize(user);
                    HttpCookie UserLoginCookie = new HttpCookie("UserInfo", json);


                    Response.AppendCookie(UserLoginCookie);
                    Response.Redirect("/#!/home");
                }
                else
                {

                    lblMessage.Text = "Incorrect Username and Password";
                }

                if (dsLogin.Tables[0].Rows.Count == 0)
                {

                    if (dsLogin.Tables[1].Rows.Count > 0)
                    {

                        for (int i = 0; i < dsLogin.Tables[1].Rows.Count; i++)
                        {
                            user.status = dsLogin.Tables[1].Rows[0]["status"].ToString();
                            user.AccountID = dsLogin.Tables[1].Rows[0]["AccountID"].ToString();
                            user.UserID = "";
                            user.UserName = "";
                            user.RoleID = "";
                            user.DealerID = "";
                            user.City = "";
                            user.PriceGroup = "";
                            user.RegionStateId = "";
                            user.RoleName = "";
                            user.DesignationID = "";
                            user.BusinessEntityID = "";
                            user.EmployeeID = "";
                            user.AccessModules = "";
                            user.Email = "";
                            user.GroupEntityID = "";
                            user.IsBusinessEntity = "";
                            user.ParentDealerID = "";


                        }
                        lblMessage.Text = "Account Expired";

                        StringBuilder str = new StringBuilder();
                        str.Append("<a href='https://www.GCPL.com/Reneworder.aspx?userid='" + user.AccountID + "'&Product='  style='display:none;color:red'>Click Here To Renew Your Account</a>");

                        ltrurl.Text = str.ToString();
                    }
                    else
                    {

                        lblMessage.Text = "Incorrect Username and Password";

                        //lblMessage.Text = "Account Expired";

                        //StringBuilder str = new StringBuilder();
                        //str.Append("<a href='http://test.bkmist.com/Reneworder.aspx?userid='" + user.AccountID + "'&Product='  style='display:none;color:red'>Click Here To Renew Your Account</a>");

                        //ltrurl.Text = str.ToString();
                    }
                }
                
            }
            else
            {

                lblMessage.Text = "Incorrect Username and Password";
            }


        }

        private DataSet GetUserLogin(string UserName, string Password)
        {
            string userName = UserName;
            string password = Password;
            DataSet ds = new DataSet();
            string sp_Name = "Proc_UserLogin";
            SqlParameter[] sp = new SqlParameter[2];
            sp[0] = new SqlParameter("@UserName", userName);
            sp[1] = new SqlParameter("@Password", Password);
            try
            {
                ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionString(), CommandType.StoredProcedure, sp_Name, sp);
            }

            catch (Exception)
            {

                throw;
            }
            return ds;
        }

        protected void lbForgorPassword_Click(object sender, EventArgs e)
        {
            Response.Redirect("ResetPassword.aspx");
        }
    }

    public class TestCookie
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string UserID { get; set; }
        public string RoleID { get; set; }
        public string DealerID { get; set; }
        public string RegionStateId { get; set; }
        public string RoleName { get; set; }
        public string City { get; set; }
        public string PriceGroup { get; set; }
        public string BusinessEntityID { get; set; }
        public string AccountID { get; set; }
        public string GroupEntityID { get; set; }
        public string IsBusinessEntity { get; set; }
        public string ParentDealerID { get; set; }
        public string DesignationID { get; set; }
        public string status { get; set; }
        public string EmployeeID { get; set; }
        public string AccessModules { get; set; }
    }
}