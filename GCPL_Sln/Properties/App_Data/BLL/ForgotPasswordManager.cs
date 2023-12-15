using DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ForgotPasswordManager
/// </summary>
public class ForgotPasswordManager
{
    public ForgotPasswordManager()
    {
        //
        // TODO: Add constructor logic here
        //
    }



    public DataSet GetUserInfo(string Email)
    {
        DataSet dsLogin = new DataSet();
        string CommandString = "select UserID,EmployeeCode,FirstName,LastName,Email,PhoneNo,SecurityCode, IsActive from UserMaster where email = '" + Email.ToString() + "' " +
                               " and IsActive=1 ";
        try
        {
            dsLogin = SqlHelper.ExecuteDataset(SqlHelper.ConnectionString(), CommandType.Text, CommandString);
        }
        catch (Exception)
        {
            throw;
        }
        return dsLogin;
    }


    public DataSet OTP(string mobile, string securityCode)
    {
        DataSet result2 = new DataSet();
        string cmdStr = "Proc_OTPChangePassword";
        SqlParameter[] param = new SqlParameter[2];
        param[0] = new SqlParameter("@otp", securityCode);
        param[1] = new SqlParameter("@Mobile", mobile);
        result2 = SqlHelper.ExecuteDataset(SqlHelper.ConnectionString(), CommandType.StoredProcedure, cmdStr, param);


        return result2;
    }


    public int PostResetPasswordWithOtp(string password, string mobile, string otp,string UserID)
    {
        int result2 = 0;

        string cmdStr = "BKMIST_ResetPasswordOTP";
        SqlParameter[] param = new SqlParameter[4];
        param[0] = new SqlParameter("@password", Crypts.Encrypt(password));
        param[1] = new SqlParameter("@mobile", mobile);
        param[2] = new SqlParameter("@otp", otp);
        param[3] = new SqlParameter("@UserID", UserID);
        result2 = SqlHelper.ExecuteNonQuery(SqlHelper.ConnectionString(), CommandType.StoredProcedure, cmdStr, param);

        return result2;
    }
}