/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { browser } from 'protractor';

import { APP_ROUTES, ADMIN_USERNAME, ADMIN_PASSWORD } from '../../configs';
import { LoginPage, LogoutPage } from '../../pages/pages';
import { Utils } from '../../utilities/utils';
import { navigate } from '../../utilities/browser-utils';

describe('Login', () => {

  const loginPage = new LoginPage();
  const logoutPage = new LogoutPage();

  const testUser = {
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD
  };

  beforeAll(async (done) => {
    done();
  });

  afterEach(async (done) => {
    await logoutPage.load();
    await Utils.clearLocalStorage();
    done();
  });

  describe('UI tests', () => {
    beforeEach(async (done) => {
      await loginPage.load();
      done();
    });

    it('login page layout', async () => {
      expect(await loginPage.login.usernameInput.isEnabled()).toBe(true, 'username input is not enabled');
      expect(await loginPage.login.passwordInput.isEnabled()).toBe(true, 'password input is not enabled');
      expect(await loginPage.login.submitButton.isEnabled()).toBe(false, 'SIGN IN button is enabled');
      expect(await loginPage.login.getPasswordVisibility()).toBe(false, 'Password is not hidden by default');
    });

  });

  describe('with valid credentials', () => {
    it('LoginAsAdmin', async () => {

      await loginPage.loginWith(testUser.username, testUser.password);
      expect(await browser.getCurrentUrl()).toContain(APP_ROUTES.PERSONAL_FILES);
    })
  });

  describe('with invalid credentials', () => {
    const { login: loginComponent } = loginPage;
    const { errorMessage } = loginComponent;

    it('Login error for inappropriate user', async () => {
      await loginPage.tryLoginWith('nonexistent-user', 'any-password');
      expect(await browser.getCurrentUrl()).toContain(APP_ROUTES.LOGIN);
      expect(await errorMessage.isDisplayed()).toBe(true, 'error message is not displayed');
      expect(await errorMessage.getText()).toBe(`You've entered an unknown username or password`);
	  
	  await navigate(APP_ROUTES.PERSONAL_FILES);
      expect(await browser.getCurrentUrl()).toContain(APP_ROUTES.LOGIN);
    });

  });
});
