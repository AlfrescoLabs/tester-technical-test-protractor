/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { browser, ExpectedConditions as EC } from 'protractor';
import { LoginComponent } from '../components/components';
import { Page } from './page';

import { ADMIN_USERNAME, ADMIN_PASSWORD, BROWSER_WAIT_TIMEOUT, APP_ROUTES } from '../configs';

export class LoginPage extends Page {
  login: LoginComponent = new LoginComponent(this.app);

  /** @override */
  constructor() {
    super(APP_ROUTES.LOGIN);
  }

  /** @override */
  async load() {
    await super.load();
    const { submitButton } = this.login;
    const hasSubmitButton = EC.presenceOf(submitButton);
    return browser.wait(hasSubmitButton, BROWSER_WAIT_TIMEOUT);
  }

  async loginWith(username: string, password?: string) {
    const pass = password || username;
    await this.load();
    await this.login.enterCredentials(username, pass)
    await this.login.submit();
    return super.waitForApp();
  }

  async loginWithAdmin() {
    await this.load();
    return this.loginWith(ADMIN_USERNAME, ADMIN_PASSWORD);
  }

  async tryLoginWith(username: string, password?: string) {
    const pass = password || username;
    await this.load();
    await this.login.enterCredentials(username, pass);
    await this.login.submit();
    return browser.wait(EC.presenceOf(this.login.errorMessage), BROWSER_WAIT_TIMEOUT);
  }
}
