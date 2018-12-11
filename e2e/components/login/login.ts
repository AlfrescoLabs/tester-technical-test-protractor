/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { by, ElementFinder } from 'protractor';
import { Component } from '../component';

export class LoginComponent extends Component {
  static selector = 'adf-login';

  private locators = {
    usernameInput: by.css('input#username'),
    passwordInput: by.css('input#password'),
    passwordVisibility: by.css('.adf-login-password-icon'),
    submitButton: by.css('button#login-button'),
    errorMessage: by.css('.login-error-message'),
    copyright: by.css('.copyright')
  };

  usernameInput: ElementFinder = this.component.element(this.locators.usernameInput);
  passwordInput: ElementFinder = this.component.element(this.locators.passwordInput);
  submitButton: ElementFinder = this.component.element(this.locators.submitButton);
  errorMessage: ElementFinder = this.component.element(this.locators.errorMessage);
  copyright: ElementFinder = this.component.element(this.locators.copyright);
  passwordVisibility: ElementFinder = this.component.element(this.locators.passwordVisibility);

  constructor(ancestor?: ElementFinder) {
    super(LoginComponent.selector, ancestor);
  }

  async enterUsername(username: string) {
    const { usernameInput } = this;

    await usernameInput.clear();
    await usernameInput.sendKeys(username);
  }

  async enterPassword(password: string) {
    const { passwordInput } = this;

    await passwordInput.clear();
    await passwordInput.sendKeys(password);
  }

  async enterCredentials(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
  }

  submit() {
    return this.submitButton.click();
  }

  async getPasswordVisibility() {
    const text = await this.passwordVisibility.getText();
    if (text.endsWith('visibility_off')) {
      return false;
    }
    else {
      if (text.endsWith('visibility')) {
        return true;
      }
    }
  }

  async isPasswordShown() {
    const type = await this.passwordInput.getAttribute('type');
    if (type === 'text') {
      return true;
    }
    else {
      if (type === 'password') {
        return false;
      }
    }
  }
}
