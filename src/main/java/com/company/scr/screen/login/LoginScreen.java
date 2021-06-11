package com.company.scr.screen.login;

import io.jmix.core.CoreProperties;
import io.jmix.core.MessageTools;
import io.jmix.core.Messages;
import io.jmix.securityui.authentication.AuthDetails;
import io.jmix.securityui.authentication.LoginScreenSupport;
import io.jmix.ui.Notifications;
import io.jmix.ui.action.Action;
import io.jmix.ui.component.CheckBox;
import io.jmix.ui.component.ComboBox;
import io.jmix.ui.component.PasswordField;
import io.jmix.ui.component.TextField;
import io.jmix.ui.navigation.Route;
import io.jmix.ui.screen.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;

import java.util.Locale;

@UiController("scr_LoginScreen")
@UiDescriptor("login-screen.xml")
@Route(path = "login", root = true)
public class LoginScreen extends Screen {

    @Autowired
    private TextField<String> usernameField;

    @Autowired
    private PasswordField passwordField;

    @Autowired
    private CheckBox rememberMeCheckBox;

    @Autowired
    private ComboBox<Locale> localesField;

    @Autowired
    private Notifications notifications;

    @Autowired
    private Messages messages;

    @Autowired
    private MessageTools messageTools;

    @Autowired
    private LoginScreenSupport authenticationSupport;

    @Autowired
    private CoreProperties coreProperties;

    @Subscribe
    private void onInit(InitEvent event) {
        usernameField.focus();
        initLocalesField();
        initDefaultCredentials();
    }

    private void initLocalesField() {
        localesField.setOptionsMap(messageTools.getAvailableLocalesMap());
        localesField.setValue(coreProperties.getAvailableLocales().get(0));
    }

    private void initDefaultCredentials() {
        usernameField.setValue("admin");
        passwordField.setValue("admin");
    }

    @Subscribe("submit")
    private void onSubmitActionPerformed(Action.ActionPerformedEvent event) {
        login();
    }

    private void login() {
        String username = usernameField.getValue();
        String password = passwordField.getValue() != null ? passwordField.getValue() : "";

        if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
            notifications.create(Notifications.NotificationType.WARNING)
                    .withCaption(messages.getMessage(getClass(), "emptyUsernameOrPassword"))
                    .show();
            return;
        }

        try {
            authenticationSupport.authenticate(
                    AuthDetails.of(username, password)
                            .withLocale(localesField.getValue())
                            .withRememberMe(rememberMeCheckBox.isChecked()), this);
        } catch (BadCredentialsException e) {
            notifications.create(Notifications.NotificationType.ERROR)
                    .withCaption(messages.getMessage(getClass(), "loginFailed"))
                    .withDescription(e.getMessage())
                    .show();
        }
    }
}
