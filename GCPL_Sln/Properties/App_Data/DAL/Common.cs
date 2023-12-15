
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
namespace DAL
{
    public class Common
    {
        public static string AccessQuery = "";
        public static string AccessJoin = "";
        public static string RegionFilter = "";
        public static string ProductFilter = "";
        public Common()
        {
            //
            // TODO: Add constructor logic here
            //
        }




        public static void SendSMS1(string contactNo, string message, Page page, string OTP)
        {
            //string strUrl = @"https://malert.in/api/api_http.php?username=COPIACS&password=2017@CopiacS&senderid=COCSPL&to=918454092950&text= OTP for password change of Cemachines.com is %.Please do not share with anyone else. This is valid to use only once.& route=OTP&type=text";
            string strUrl = @"https://malert.in/api/api_http.php?username=COPIACS&password=2017@CopiacS&senderid=COCSPL&to=" + contactNo + "&text=" + message + "&route=" + OTP + "&type=text";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(strUrl);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream s = response.GetResponseStream();
            StreamReader readStream = new StreamReader(s);
            string dataString = readStream.ReadToEnd();
            response.Close();
            s.Close();
            readStream.Close();
        }

        #region Public Implementations

        public static bool IsValidDataSet(DataSet dsToValidate)
        {
            bool isValid = false;
            if (dsToValidate != null)
            {
                foreach (DataTable dt in dsToValidate.Tables)
                {
                    if (dt != null)
                    {
                        if (dt.Rows.Count > 0)
                        {
                            isValid = true;
                            //break;
                        }
                        else
                        {
                            isValid = false;
                            break;
                        }
                    }
                    else
                    {
                        isValid = false;
                        break;
                    }
                }
            }
            return isValid;
        }

        public static string HtmlEncode(string Content)
        {
            // Change html content to encoded content
            // Encoded html will keep ASP.Net validation happy
            Content = Content.Replace("<", "{").Replace(">", "}");
            return Content;
        }

        public static string HtmlDecode(string Content)
        {
            // Change html content to encoded content
            // Encoded html will keep ASP.Net validation happy
            Content = Content.Replace("{", "<").Replace("}", ">");
            return Content;
        }


        #endregion

        public static DataSet GetCustomersAjax(string Input)
        {
            DataSet ds = new DataSet();
            string CommandString = "select CustomerID,CustomerName from CustomerMaster where IsActive=1 and CustomerName like'%" + Input + "%' order by CustomerName";

            try
            {
                ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionString(), CommandType.Text, CommandString);
            }
            catch (Exception)
            {

                throw;
            }
            return ds;
        }

        public static string GetBaseURL()
        {
            try
            {
                string tmpStr = "http://" + HttpContext.Current.Request.Url.Host;
                if (!HttpContext.Current.Request.Url.IsDefaultPort)
                    tmpStr += ":" + HttpContext.Current.Request.Url.Port;
                //  tmpStr += "/" + HttpContext.Current.Request.Url.LocalPath.Split('/')[1].ToString();
                return tmpStr + "" + HttpContext.Current.Request.Url.LocalPath.Split('/')[0].ToString();
                //string tmpStr = HttpContext.Current.Request.Url.ToString().Substring(0, HttpContext.Current.Request.Url.OriginalString.LastIndexOf(HttpContext.Current.Request.FilePath.Substring(HttpContext.Current.Request.FilePath.LastIndexOf("/"))));
                //return HttpContext.Current.Request.Url.ToString().Substring(0, HttpContext.Current.Request.Url.OriginalString.LastIndexOf(HttpContext.Current.Request.FilePath.Substring(HttpContext.Current.Request.FilePath.LastIndexOf("/"))));
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}