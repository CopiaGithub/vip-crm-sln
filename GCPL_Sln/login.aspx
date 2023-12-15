<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="GCPL.login" %>

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
            <div id="login" class="tab-pane active">
              
                    
                   <asp:TextBox ID="txtuser" runat="server" placeholder="Username" class="form-control top"></asp:TextBox>
                <br />
                    <asp:TextBox ID="txtpass" runat="server" TextMode="Password" placeholder="Password" class="form-control bottom"></asp:TextBox>
                    <div class="checkbox">
                        <label>
                            <asp:CheckBox runat="server" id="chkremeber" /> Remember Me
                        </label>
                    </div>
                     <asp:Label runat="server" ForeColor="Red" ID="lblMessage"></asp:Label>
                     <asp:Button Text="login" CssClass="btn btn-lg btn-primary btn-block" OnClick="Unnamed_Click" runat="server" />
                       <asp:Literal ID="ltrurl" runat="server"></asp:Literal>
             
            </div>
            <div id="forgot" class="tab-pane">
                
                    <p class="text-muted text-center">Enter your valid e-mail</p>
                    <asp:TextBox ID="txtemailid" runat="server" placeholder="mail@domain.com" class="form-control"></asp:TextBox>
                    <br>
                    <asp:Button runat="server" class="btn btn-lg btn-danger btn-block" Text="Recover Password"></asp:Button>
              
            </div>
            <div id="signup" class="tab-pane">
                
                    <asp:TextBox ID="txtusername" runat="server" placeholder="username" class="form-control top"></asp:TextBox>
                    <asp:TextBox ID="txtemail" runat="server" placeholder="mail@domain.com" class="form-control middle"></asp:TextBox>
                    <asp:TextBox ID="txtpwd" runat="server" placeholder="password" class="form-control middle"></asp:TextBox>
                    <asp:TextBox ID="txtrepwd" runat="server" placeholder="re-password" class="form-control bottom"></asp:TextBox>
                    <%--<button class="btn btn-lg btn-success btn-block" type="submit">Register</button>--%>
                   
             
            </div>
        </div>
        <hr>
        <div class="text-center">
            <ul class="list-inline">
            <%--    <li><a class="text-muted" href="#login" data-toggle="tab">Login</a></li>--%>
                
                 <asp:LinkButton runat="server" CssClass="LinkText" ID="lbForgorPassword" OnClick="lbForgorPassword_Click" CausesValidation="false">Password Help?</asp:LinkButton>
                <%--<li><a class="text-muted" href="#signup" data-toggle="tab">Signup</a></li>--%>
            </ul>
        </div>
    </div>
   </form>
    <!--jQuery -->
    <script src="Content/assets/lib/jquery/jquery.js"></script>
    <!--Bootstrap -->
    <script src="Content/assets/lib/bootstrap/js/bootstrap.js"></script>

<%--    <script type="text/javascript">
        (function($) {
            $(document).ready(function() {
                $('.list-inline li > a').click(function() {
                    var activeForm = $(this).attr('href') + ' > form';
                    //console.log(activeForm);
                    $(activeForm).addClass('animated fadeIn');
                    //set timer to 1 seconds, after that, unload the animate animation
                    setTimeout(function() {
                        $(activeForm).removeClass('animated fadeIn');
                    }, 1000);
                });
            });
        })(jQuery);
    </script>--%>
</body>
</html>
