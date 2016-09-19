this["dx"] = this["dx"] || {};
this["dx"]["core"] = this["dx"]["core"] || {};
this["dx"]["core"]["_templates"] = this["dx"]["core"]["_templates"] || {};

this["dx"]["core"]["_templates"]["login/template/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<!--\n    Copyright (c) 2013, 2015 by Delphix. All rights reserved.\n-->\n<div id=\"main-body\" class=\"main-body\" data-bind=\"fadeVisible: $data || hasFatalError(), css: bodyCss\" style=\"display: none;\">\n    <div id=\"loginDiv\" class=\"login-div\" data-bind=\"visible: !passwordUpdateRequested()\">\n        <div class=\"delphix-server-logo\" id=\"serverLogoStandard\" data-bind=\"visible: showAdminLogo\"/>\n        <div class=\"delphix-free-server-logo\" id=\"serverLogoFree\" data-bind=\"visible: showFreeAdminLogo\"/>\n        <div class=\"delphix-setup-logo\" id=\"setupLogoFree\" data-bind=\"visible: showFreeSetupLogo\">\n            <img src=\"assets/images/gear.png\" />\n            <img src=\"assets/images/delphix-express-black.png\" class=\"setup-logo\"/>\n        </div>\n        <div class=\"delphix-setup-logo\" id=\"setupLogoStandard\" data-bind=\"visible: showSetupLogo\">\n            <img src=\"assets/images/gear.png\" />\n            <img src=\"assets/images/delphixSetup.png\" class=\"setup-logo\"/>\n        </div>\n        <div class=\"login-input-wrapper\">\n            <form id=\"loginForm\" class=\"form-horizontal\">\n                <div class=\"form-group banner\" data-bind=\"foreach: banner, visible: banner().length > 0\">\n                    <span data-bind=\"text: $data\"></span><br/>\n                </div>\n                <div class=\"form-group sid-login-browser-msg yellow-box\" data-bind=\"visible: browserMessage().length > 0\">\n                    <div class=\"col-sm-12 text-left\" data-bind=\"text: browserMessage()\"></div>\n                </div>\n                <!-- ko if: hasFatalError -->\n                <div class=\"form-group\">\n                  <div class=\"col-sm-3 text-right\">"
    + escapeExpression((helper = helpers.gls || (depth0 && depth0.gls),options={hash:{},data:data},helper ? helper.call(depth0, "login.error", options) : helperMissing.call(depth0, "gls", "login.error", options)))
    + "</div>\n                  <div class=\"col-sm-9 text-left\" data-bind=\"text: fatalErrorMessage\"></div>\n                </div>\n                <div class=\"form-group form-group\">\n                  <div class=\"col-sm-3 text-right\">"
    + escapeExpression((helper = helpers.gls || (depth0 && depth0.gls),options={hash:{},data:data},helper ? helper.call(depth0, "login.suggestedaction", options) : helperMissing.call(depth0, "gls", "login.suggestedaction", options)))
    + "</div>\n                  <div class=\"col-sm-9 text-left\" data-bind=\"text: suggestedActionMessage\"></div>\n                </div>\n                <!-- /ko -->\n                <!-- ko ifnot: hasFatalError -->\n                <div class=\"form-group\">\n                    <label for=\"username\" class=\"col-sm-3 control-label\">\n                        "
    + escapeExpression((helper = helpers.gls || (depth0 && depth0.gls),options={hash:{},data:data},helper ? helper.call(depth0, "username.prompt", options) : helperMissing.call(depth0, "gls", "username.prompt", options)))
    + "\n                    </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" id=\"username\" class=\"form-control\"\n                            data-bind=\"value: username, valueUpdate: 'keyup', disable: submitInProgress(), hasfocus: awaitingLogin()\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"col-sm-3 control-label\">\n                        "
    + escapeExpression((helper = helpers.gls || (depth0 && depth0.gls),options={hash:{},data:data},helper ? helper.call(depth0, "password.prompt", options) : helperMissing.call(depth0, "gls", "password.prompt", options)))
    + "\n                    </label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"password\" id=\"password\" class=\"form-control\"\n                            data-bind=\"value: password, valueUpdate: 'keyup', disable: submitInProgress()\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\" data-bind=\"fadeVisible: message() != ''\" style=\"display: none;\">\n                    <div class=\"col-sm-offset-3 col-sm-9 input-controls message-div-margin error\" id=\"loginMessageDiv\">\n                        <span data-bind=\"text: message\"> </span></div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-6\">\n                        <div id=\"linkToServerSetup\" class=\"links-to-apps\" data-bind=\"visible: isDomainLogin\">\n                            <a href=\"#serverSetup\">Server Setup</a>\n                        </div>\n                        <div id=\"linkToMainApp\" class=\"links-to-apps\" data-bind=\"visible: isSystemLogin\">\n                            <a href=\"#delphixAdmin\">Delphix Admin</a>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"user-login-btn\">\n                            <input type=\"submit\" class=\"btn btn-primary\" value=\"Log In\"\n                                data-bind=\"click: login, visible: !submitInProgress()\">\n                            <div class=\"spinner\" data-bind=\"visible: submitInProgress()\">\n                                &nbsp;\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- /ko -->\n            </form>\n        </div>\n    </div>\n    <div id=\"userInitiationDiv\" class=\"initiate-user-div\" data-bind=\"visible: passwordUpdateRequested()\">\n        <form id=\"initUserForm\">\n            <div class=\"delphix-server-logo\">\n            </div>\n            <div class=\"initiate-user-wizard form-horizontal\">\n                <div data-bind=\"text: passwordChangeMessage\"></div>\n                <br>\n                <br>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-4 control-label\">\n                        Username\n                    </div>\n                    <div class=\"col-sm-8 input-controls\" id=\"usernameDiv\" data-bind=\"text: username, attr: {title: username}\">\n                    </div>\n                </div>\n                <div class=\"form-group\" data-bind=\"visible: isEmailRequired\">\n                    <label for=\"email\" class=\"col-sm-4 label-input control-label\">\n                        Email\n                    </label>\n                    <div class=\"col-sm-8\">\n                        <input type=\"text\" id=\"email\" class=\"form-control\"\n                            data-bind=\"value: email, valueUpdate: 'keyup', disabled: submitInProgress(), hasfocus: isEmailRequired()\">\n                    </div>\n                </div>\n                <div class=\"form-group error\" data-bind=\"visible: (isEmailRequired && invalidEmailMessage() !== '')\">\n                    <div class=\"col-sm-offset-4 col-sm-8 input-controls\">\n                        <div class=\"form-group\" data-bind=\"text: invalidEmailMessage\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"newPassword\" class=\"col-sm-4 control-label\">\n                        New Password\n                    </label>\n                    <div class=\"col-sm-8 input-controls\">\n                        <input type=\"password\" id=\"newPassword\" class=\"form-control\"\n                            data-bind=\"value: newPassword, valueUpdate: 'keyup', disabled: submitInProgress(), hasfocus: awaitingPassword()\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmPassword\" class=\"col-sm-4 control-label\">\n                        Confirm Password\n                    </label>\n                    <div class=\"col-sm-8 input-controls\">\n                        <input type=\"password\" id=\"confirmPassword\" class=\"form-control\"\n                            data-bind=\"value: confirmPassword, valueUpdate: 'keyup', disabled: submitInProgress()\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-4 col-sm-8\">\n                        <div>\n                            <div class=\"progress password-strength-bars\">\n                                <div id=\"strengthMeter1\" class=\"progress-bar bar-neutral\"\n                                style=\"width: 100%;\"></div>\n                            </div>\n                            <div class=\"progress password-strength-bars\">\n                                <div id=\"strengthMeter2\" class=\"progress-bar bar-neutral\"\n                                style=\"width: 100%;\"></div>\n                            </div>\n                            <div class=\"progress password-strength-bars\">\n                                <div id=\"strengthMeter3\" class=\"progress-bar bar-neutral\"\n                                style=\"width: 100%;\"></div>\n                            </div>\n                            <div class=\"progress password-strength-bars\">\n                                <div id=\"strengthMeter4\" class=\"progress-bar bar-neutral\"\n                                style=\"width: 100%;\"></div>\n                            </div>\n                        </div>\n                        <p class=\"password-strength-label\">\n                            Password Strength: <span id=\"strengthLabel\"></span>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"form-group init-message-row\" data-bind=\"fadeVisible: message() != ''\">\n                    <div class=\"col-sm-offset-4 col-sm-8 input-controls\">\n                        <div id=\"initUserMessageDiv\" class=\"left-aligned message-div error\">\n                             <span data-bind=\"text: message\"> </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-4 input-controls\">\n                        <div class=\"pull-left\">\n                            <input type=\"button\" id=\"cancelInitUserBtn\" class=\"btn\"\n                            value=\"Cancel\" data-bind=\"click: cancelLogin, visible: !cancelInProgress()\">\n                            <div class=\"spinner\" data-bind=\"visible: cancelInProgress()\">\n                                &nbsp;\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-8 input-controls\">\n                        <div class=\"pull-right\">\n                            <input type=\"submit\" id=\"initUserBtn\" class=\"btn btn-primary\"\n                            value=\"Continue\" data-bind=\"click: updateUser, visible: !submitInProgress()\">\n                            <div class=\"spinner\" data-bind=\"visible: submitInProgress()\">\n                                &nbsp;\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"sap-logo\" data-bind=\"visible: isSAPEdition\">\n        <div>\n            Delphix Engine SAP Edition\n        </div>\n        <div>\n            <img src=\"assets/images/SAP-200px.png\"/>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });