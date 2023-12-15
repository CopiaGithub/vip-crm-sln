<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ConfirmPassword.aspx.cs" Inherits="GCPL.ConfirmPassword" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--IE Compatibility modes-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Mobile first-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Login Page</title>

    <meta name="description" content="Login">
    <meta name="author" content="">

    <meta name="msapplication-TileColor" content="#5bc0de" />
    <meta name="msapplication-TileImage" content="Content/assets/img/metis-tile.png" />

    <!-- Bootstrap -->
    <link rel="stylesheet" href="Content/assets/lib/bootstrap/css/bootstrap.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="Content/assets/lib/font-awesome/css/font-awesome.css">

    <!-- Metis core stylesheet -->
    <link rel="stylesheet" href="Content/assets/css/main.css">

    <!-- metisMenu stylesheet -->
    <link rel="stylesheet" href="Content/assets/lib/metismenu/metisMenu.css">

    <!-- animate.css stylesheet -->
    <link rel="stylesheet" href="Content/assets/lib/animate.css/animate.css">
</head>
<body class="login">
    <form runat="server">
        <div class="form-signin">
            <div class="text-center">
                <img src="Content/assets/img/logo.png" alt="Metis Logo">
            </div>
            <hr>
            <div class="tab-content">
                <div id="signup" class="tab-pane active">
                    <asp:TextBox ID="txtpwd" runat="server" TextMode="Password" placeholder="New password" class="form-control middle"></asp:TextBox>
                    <br />
                    <asp:TextBox ID="txtrepwd" runat="server" TextMode="Password" placeholder="re-password" class="form-control middle"></asp:TextBox>
                    <br />
                    <asp:TextBox ID="txtOTP" runat="server" TextMode="Password" placeholder="OTP" class="form-control bottom"></asp:TextBox>

                    <%--<button class="btn btn-lg btn-success btn-block" type="submit">Register</button>--%>
                    <asp:Button runat="server" class="btn btn-lg btn-success btn-block" ID="btnReset" OnClick="btnReset_Click" Text="Reset Password"></asp:Button>
                    <asp:Label ID="lbssuccessMsg" runat="server"></asp:Label>

                    <asp:LinkButton ID="lnkGotoLoginPage" runat="server" Visible="false" Text="Go to Login Page" ForeColor="Red" OnClick="lnkGotoLoginPage_Click"></asp:LinkButton>
                </div>
            </div>
        </div>
    </form>
    <!--jQuery -->
    <script src="Content/assets/lib/jquery/jquery.js"></script>
    <!--Bootstrap -->
    <script src="Content/assets/lib/bootstrap/js/bootstrap.js"></script>


</body>
</html>

