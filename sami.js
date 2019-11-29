
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:App" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App.html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Console_Commands" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Console/Commands.html">Commands</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Console_Commands_GenerateJavascriptRoutes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Console/Commands/GenerateJavascriptRoutes.html">GenerateJavascriptRoutes</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Console_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Console/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Exceptions" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Exceptions_Handler" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Exceptions/Handler.html">Handler</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Clients" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Clients.html">Clients</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Clients_ClientCredentialsClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Clients/ClientCredentialsClient.html">ClientCredentialsClient</a>                    </div>                </li>                            <li data-name="class:App_Http_Clients_ClientCredentialsClientInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Clients/ClientCredentialsClientInterface.html">ClientCredentialsClientInterface</a>                    </div>                </li>                            <li data-name="class:App_Http_Clients_PasswordClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Clients/PasswordClient.html">PasswordClient</a>                    </div>                </li>                            <li data-name="class:App_Http_Clients_PasswordClientInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Clients/PasswordClientInterface.html">PasswordClientInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Controllers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:App_Http_Controllers_Auth" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Controllers/Auth.html">Auth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Controllers_Auth_ConfirmPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ConfirmPasswordController.html">ConfirmPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_ForgotPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ForgotPasswordController.html">ForgotPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_LoginController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/LoginController.html">LoginController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_ResetPasswordController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/ResetPasswordController.html">ResetPasswordController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_Auth_VerificationController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="App/Http/Controllers/Auth/VerificationController.html">VerificationController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Controllers_Controller" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_FacilityController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/FacilityController.html">FacilityController</a>                    </div>                </li>                            <li data-name="class:App_Http_Controllers_HomeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Controllers/HomeController.html">HomeController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Http_Middleware" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Http/Middleware.html">Middleware</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Http_Middleware_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_CheckForMaintenanceMode" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/CheckForMaintenanceMode.html">CheckForMaintenanceMode</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_EncryptCookies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_TrimStrings" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/TrimStrings.html">TrimStrings</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_TrustProxies" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/TrustProxies.html">TrustProxies</a>                    </div>                </li>                            <li data-name="class:App_Http_Middleware_VerifyCsrfToken" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:App_Http_Kernel" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Http/Kernel.html">Kernel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Models" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Models_User" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Models/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Providers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Providers_AppServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_AuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_BroadcastServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/BroadcastServiceProvider.html">BroadcastServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_EventServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a>                    </div>                </li>                            <li data-name="class:App_Providers_RouteServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:App_Repositories" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="App/Repositories.html">Repositories</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:App_Repositories_SessionTokenRepository" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="App/Repositories/SessionTokenRepository.html">SessionTokenRepository</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "App.html", "name": "App", "doc": "Namespace App"},{"type": "Namespace", "link": "App/Console.html", "name": "App\\Console", "doc": "Namespace App\\Console"},{"type": "Namespace", "link": "App/Console/Commands.html", "name": "App\\Console\\Commands", "doc": "Namespace App\\Console\\Commands"},{"type": "Namespace", "link": "App/Exceptions.html", "name": "App\\Exceptions", "doc": "Namespace App\\Exceptions"},{"type": "Namespace", "link": "App/Http.html", "name": "App\\Http", "doc": "Namespace App\\Http"},{"type": "Namespace", "link": "App/Http/Clients.html", "name": "App\\Http\\Clients", "doc": "Namespace App\\Http\\Clients"},{"type": "Namespace", "link": "App/Http/Controllers.html", "name": "App\\Http\\Controllers", "doc": "Namespace App\\Http\\Controllers"},{"type": "Namespace", "link": "App/Http/Controllers/Auth.html", "name": "App\\Http\\Controllers\\Auth", "doc": "Namespace App\\Http\\Controllers\\Auth"},{"type": "Namespace", "link": "App/Http/Middleware.html", "name": "App\\Http\\Middleware", "doc": "Namespace App\\Http\\Middleware"},{"type": "Namespace", "link": "App/Models.html", "name": "App\\Models", "doc": "Namespace App\\Models"},{"type": "Namespace", "link": "App/Providers.html", "name": "App\\Providers", "doc": "Namespace App\\Providers"},{"type": "Namespace", "link": "App/Repositories.html", "name": "App\\Repositories", "doc": "Namespace App\\Repositories"},
            {"type": "Interface", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/ClientCredentialsClientInterface.html", "name": "App\\Http\\Clients\\ClientCredentialsClientInterface", "doc": "&quot;&quot;"},
                    
            {"type": "Interface", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/PasswordClientInterface.html", "name": "App\\Http\\Clients\\PasswordClientInterface", "doc": "&quot;&quot;"},
                    
            
            {"type": "Class", "fromName": "App\\Console\\Commands", "fromLink": "App/Console/Commands.html", "link": "App/Console/Commands/GenerateJavascriptRoutes.html", "name": "App\\Console\\Commands\\GenerateJavascriptRoutes", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Commands\\GenerateJavascriptRoutes", "fromLink": "App/Console/Commands/GenerateJavascriptRoutes.html", "link": "App/Console/Commands/GenerateJavascriptRoutes.html#method___construct", "name": "App\\Console\\Commands\\GenerateJavascriptRoutes::__construct", "doc": "&quot;Create a new command instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Console\\Commands\\GenerateJavascriptRoutes", "fromLink": "App/Console/Commands/GenerateJavascriptRoutes.html", "link": "App/Console/Commands/GenerateJavascriptRoutes.html#method_handle", "name": "App\\Console\\Commands\\GenerateJavascriptRoutes::handle", "doc": "&quot;Execute the console command.&quot;"},
            
            {"type": "Class", "fromName": "App\\Console", "fromLink": "App/Console.html", "link": "App/Console/Kernel.html", "name": "App\\Console\\Kernel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_schedule", "name": "App\\Console\\Kernel::schedule", "doc": "&quot;Define the application&#039;s command schedule.&quot;"},
                    {"type": "Method", "fromName": "App\\Console\\Kernel", "fromLink": "App/Console/Kernel.html", "link": "App/Console/Kernel.html#method_commands", "name": "App\\Console\\Kernel::commands", "doc": "&quot;Register the commands for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Exceptions", "fromLink": "App/Exceptions.html", "link": "App/Exceptions/Handler.html", "name": "App\\Exceptions\\Handler", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_report", "name": "App\\Exceptions\\Handler::report", "doc": "&quot;Report or log an exception.&quot;"},
                    {"type": "Method", "fromName": "App\\Exceptions\\Handler", "fromLink": "App/Exceptions/Handler.html", "link": "App/Exceptions/Handler.html#method_render", "name": "App\\Exceptions\\Handler::render", "doc": "&quot;Render an exception into an HTTP response.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/ClientCredentialsClient.html", "name": "App\\Http\\Clients\\ClientCredentialsClient", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/ClientCredentialsClientInterface.html", "name": "App\\Http\\Clients\\ClientCredentialsClientInterface", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/PasswordClient.html", "name": "App\\Http\\Clients\\PasswordClient", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Clients", "fromLink": "App/Http/Clients.html", "link": "App/Http/Clients/PasswordClientInterface.html", "name": "App\\Http\\Clients\\PasswordClientInterface", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ConfirmPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ConfirmPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ConfirmPasswordController", "fromLink": "App/Http/Controllers/Auth/ConfirmPasswordController.html", "link": "App/Http/Controllers/Auth/ConfirmPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ConfirmPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method_validateEmail", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::validateEmail", "doc": "&quot;Validate the email for the given request.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ForgotPasswordController", "fromLink": "App/Http/Controllers/Auth/ForgotPasswordController.html", "link": "App/Http/Controllers/Auth/ForgotPasswordController.html#method_remoteEmailValidation", "name": "App\\Http\\Controllers\\Auth\\ForgotPasswordController::remoteEmailValidation", "doc": "&quot;Remote email validation.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/LoginController.html", "name": "App\\Http\\Controllers\\Auth\\LoginController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\LoginController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_showLoginForm", "name": "App\\Http\\Controllers\\Auth\\LoginController::showLoginForm", "doc": "&quot;Show the application&#039;s login form.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_login", "name": "App\\Http\\Controllers\\Auth\\LoginController::login", "doc": "&quot;Handle a login request to the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_logout", "name": "App\\Http\\Controllers\\Auth\\LoginController::logout", "doc": "&quot;Log the user out of the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_remoteLogout", "name": "App\\Http\\Controllers\\Auth\\LoginController::remoteLogout", "doc": "&quot;Remote deauthentication.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_remoteLogin", "name": "App\\Http\\Controllers\\Auth\\LoginController::remoteLogin", "doc": "&quot;Remote authentication.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_remoteQueryPermissionsGranted", "name": "App\\Http\\Controllers\\Auth\\LoginController::remoteQueryPermissionsGranted", "doc": "&quot;Remote; query permissions granted to user.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_processPermissions", "name": "App\\Http\\Controllers\\Auth\\LoginController::processPermissions", "doc": "&quot;Group permissions by module.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\LoginController", "fromLink": "App/Http/Controllers/Auth/LoginController.html", "link": "App/Http/Controllers/Auth/LoginController.html#method_syncRemoteUser", "name": "App\\Http\\Controllers\\Auth\\LoginController::syncRemoteUser", "doc": "&quot;Sync remote user to local storage.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method_reset", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::reset", "doc": "&quot;Reset the given user&#039;s password.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method_tokenExpired", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::tokenExpired", "doc": "&quot;Determine if the token has expired.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\ResetPasswordController", "fromLink": "App/Http/Controllers/Auth/ResetPasswordController.html", "link": "App/Http/Controllers/Auth/ResetPasswordController.html#method_remoteResetPassword", "name": "App\\Http\\Controllers\\Auth\\ResetPasswordController::remoteResetPassword", "doc": "&quot;Remote password reset.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers\\Auth", "fromLink": "App/Http/Controllers/Auth.html", "link": "App/Http/Controllers/Auth/VerificationController.html", "name": "App\\Http\\Controllers\\Auth\\VerificationController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\VerificationController", "fromLink": "App/Http/Controllers/Auth/VerificationController.html", "link": "App/Http/Controllers/Auth/VerificationController.html#method___construct", "name": "App\\Http\\Controllers\\Auth\\VerificationController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\VerificationController", "fromLink": "App/Http/Controllers/Auth/VerificationController.html", "link": "App/Http/Controllers/Auth/VerificationController.html#method_verify", "name": "App\\Http\\Controllers\\Auth\\VerificationController::verify", "doc": "&quot;Mark the authenticated user&#039;s email address as verified.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\Auth\\VerificationController", "fromLink": "App/Http/Controllers/Auth/VerificationController.html", "link": "App/Http/Controllers/Auth/VerificationController.html#method_remoteVerifyEmail", "name": "App\\Http\\Controllers\\Auth\\VerificationController::remoteVerifyEmail", "doc": "&quot;Remote email verification.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/Controller.html", "name": "App\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/FacilityController.html", "name": "App\\Http\\Controllers\\FacilityController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method___construct", "name": "App\\Http\\Controllers\\FacilityController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_index", "name": "App\\Http\\Controllers\\FacilityController::index", "doc": "&quot;Show facilities.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_showDatatables", "name": "App\\Http\\Controllers\\FacilityController::showDatatables", "doc": "&quot;Show facilities via datatables.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_datatables", "name": "App\\Http\\Controllers\\FacilityController::datatables", "doc": "&quot;Load facilities via datatables.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_show", "name": "App\\Http\\Controllers\\FacilityController::show", "doc": "&quot;Show facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_create", "name": "App\\Http\\Controllers\\FacilityController::create", "doc": "&quot;Show create facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_store", "name": "App\\Http\\Controllers\\FacilityController::store", "doc": "&quot;Create facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_edit", "name": "App\\Http\\Controllers\\FacilityController::edit", "doc": "&quot;Show edit facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_update", "name": "App\\Http\\Controllers\\FacilityController::update", "doc": "&quot;Update facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_revoke", "name": "App\\Http\\Controllers\\FacilityController::revoke", "doc": "&quot;Revoke facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_restore", "name": "App\\Http\\Controllers\\FacilityController::restore", "doc": "&quot;Restore facility.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\FacilityController", "fromLink": "App/Http/Controllers/FacilityController.html", "link": "App/Http/Controllers/FacilityController.html#method_destroy", "name": "App\\Http\\Controllers\\FacilityController::destroy", "doc": "&quot;Delete facility.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Controllers", "fromLink": "App/Http/Controllers.html", "link": "App/Http/Controllers/HomeController.html", "name": "App\\Http\\Controllers\\HomeController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method___construct", "name": "App\\Http\\Controllers\\HomeController::__construct", "doc": "&quot;Create a new controller instance.&quot;"},
                    {"type": "Method", "fromName": "App\\Http\\Controllers\\HomeController", "fromLink": "App/Http/Controllers/HomeController.html", "link": "App/Http/Controllers/HomeController.html#method_index", "name": "App\\Http\\Controllers\\HomeController::index", "doc": "&quot;Show the application dashboard.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http", "fromLink": "App/Http.html", "link": "App/Http/Kernel.html", "name": "App\\Http\\Kernel", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/Authenticate.html", "name": "App\\Http\\Middleware\\Authenticate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\Authenticate", "fromLink": "App/Http/Middleware/Authenticate.html", "link": "App/Http/Middleware/Authenticate.html#method_redirectTo", "name": "App\\Http\\Middleware\\Authenticate::redirectTo", "doc": "&quot;Get the path the user should be redirected to when they are not authenticated.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/CheckForMaintenanceMode.html", "name": "App\\Http\\Middleware\\CheckForMaintenanceMode", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/EncryptCookies.html", "name": "App\\Http\\Middleware\\EncryptCookies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Http\\Middleware\\RedirectIfAuthenticated", "fromLink": "App/Http/Middleware/RedirectIfAuthenticated.html", "link": "App/Http/Middleware/RedirectIfAuthenticated.html#method_handle", "name": "App\\Http\\Middleware\\RedirectIfAuthenticated::handle", "doc": "&quot;Handle an incoming request.&quot;"},
            
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/TrimStrings.html", "name": "App\\Http\\Middleware\\TrimStrings", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/TrustProxies.html", "name": "App\\Http\\Middleware\\TrustProxies", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Http\\Middleware", "fromLink": "App/Http/Middleware.html", "link": "App/Http/Middleware/VerifyCsrfToken.html", "name": "App\\Http\\Middleware\\VerifyCsrfToken", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "App\\Models", "fromLink": "App/Models.html", "link": "App/Models/User.html", "name": "App\\Models\\User", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Models\\User", "fromLink": "App/Models/User.html", "link": "App/Models/User.html#method_boot", "name": "App\\Models\\User::boot", "doc": "&quot;Boot function from laravel.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AppServiceProvider.html", "name": "App\\Providers\\AppServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_register", "name": "App\\Providers\\AppServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_boot", "name": "App\\Providers\\AppServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_createClientCredentialsClient", "name": "App\\Providers\\AppServiceProvider::createClientCredentialsClient", "doc": "&quot;Create client-credentials client.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_createPasswordClient", "name": "App\\Providers\\AppServiceProvider::createPasswordClient", "doc": "&quot;Create password client.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\AppServiceProvider", "fromLink": "App/Providers/AppServiceProvider.html", "link": "App/Providers/AppServiceProvider.html#method_getLogMiddleware", "name": "App\\Providers\\AppServiceProvider::getLogMiddleware", "doc": "&quot;Get log middleware.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/AuthServiceProvider.html", "name": "App\\Providers\\AuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\AuthServiceProvider", "fromLink": "App/Providers/AuthServiceProvider.html", "link": "App/Providers/AuthServiceProvider.html#method_boot", "name": "App\\Providers\\AuthServiceProvider::boot", "doc": "&quot;Register any authentication \/ authorization services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/BroadcastServiceProvider.html", "name": "App\\Providers\\BroadcastServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\BroadcastServiceProvider", "fromLink": "App/Providers/BroadcastServiceProvider.html", "link": "App/Providers/BroadcastServiceProvider.html#method_boot", "name": "App\\Providers\\BroadcastServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/EventServiceProvider.html", "name": "App\\Providers\\EventServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\EventServiceProvider", "fromLink": "App/Providers/EventServiceProvider.html", "link": "App/Providers/EventServiceProvider.html#method_boot", "name": "App\\Providers\\EventServiceProvider::boot", "doc": "&quot;Register any events for your application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Providers", "fromLink": "App/Providers.html", "link": "App/Providers/RouteServiceProvider.html", "name": "App\\Providers\\RouteServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_boot", "name": "App\\Providers\\RouteServiceProvider::boot", "doc": "&quot;Define your route model bindings, pattern filters, etc.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_map", "name": "App\\Providers\\RouteServiceProvider::map", "doc": "&quot;Define the routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapWebRoutes", "name": "App\\Providers\\RouteServiceProvider::mapWebRoutes", "doc": "&quot;Define the \&quot;web\&quot; routes for the application.&quot;"},
                    {"type": "Method", "fromName": "App\\Providers\\RouteServiceProvider", "fromLink": "App/Providers/RouteServiceProvider.html", "link": "App/Providers/RouteServiceProvider.html#method_mapApiRoutes", "name": "App\\Providers\\RouteServiceProvider::mapApiRoutes", "doc": "&quot;Define the \&quot;api\&quot; routes for the application.&quot;"},
            
            {"type": "Class", "fromName": "App\\Repositories", "fromLink": "App/Repositories.html", "link": "App/Repositories/SessionTokenRepository.html", "name": "App\\Repositories\\SessionTokenRepository", "doc": "&quot;Session base token persistence.&quot;"},
                                                        {"type": "Method", "fromName": "App\\Repositories\\SessionTokenRepository", "fromLink": "App/Repositories/SessionTokenRepository.html", "link": "App/Repositories/SessionTokenRepository.html#method___constructor", "name": "App\\Repositories\\SessionTokenRepository::__constructor", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\SessionTokenRepository", "fromLink": "App/Repositories/SessionTokenRepository.html", "link": "App/Repositories/SessionTokenRepository.html#method_create", "name": "App\\Repositories\\SessionTokenRepository::create", "doc": "&quot;Create token.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\SessionTokenRepository", "fromLink": "App/Repositories/SessionTokenRepository.html", "link": "App/Repositories/SessionTokenRepository.html#method_retrieve", "name": "App\\Repositories\\SessionTokenRepository::retrieve", "doc": "&quot;Retrieve token.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\SessionTokenRepository", "fromLink": "App/Repositories/SessionTokenRepository.html", "link": "App/Repositories/SessionTokenRepository.html#method_update", "name": "App\\Repositories\\SessionTokenRepository::update", "doc": "&quot;Updates token.&quot;"},
                    {"type": "Method", "fromName": "App\\Repositories\\SessionTokenRepository", "fromLink": "App/Repositories/SessionTokenRepository.html", "link": "App/Repositories/SessionTokenRepository.html#method_delete", "name": "App\\Repositories\\SessionTokenRepository::delete", "doc": "&quot;Destroy token.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


