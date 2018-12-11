/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions as EC
} from 'protractor';
import { BROWSER_WAIT_TIMEOUT, USE_HASH_STRATEGY } from './../configs';

export abstract class Page {
  private locators = {
    app: by.css('app-root'),
    layout: by.css('app-layout'),

    genericError: 'aca-generic-error',
    genericErrorIcon: 'aca-generic-error .mat-icon',
    genericErrorTitle: '.generic-error__title'
  };

  public app: ElementFinder = element(this.locators.app);
  public layout: ElementFinder = element(this.locators.layout);

  genericError: ElementFinder = browser.$(this.locators.genericError);
  genericErrorIcon: ElementFinder = browser.$(this.locators.genericErrorIcon);
  genericErrorTitle: ElementFinder = browser.$(this.locators.genericErrorTitle);

  constructor(public url: string = '') {}

  getTitle() {
    return browser.getTitle();
  }

  load(relativeUrl: string = '') {
    const hash = USE_HASH_STRATEGY ? '/#' : '';
    const path = `${browser.baseUrl}${hash}${this.url}${relativeUrl}`;
    return browser.get(path);
  }

  waitForApp() {
    return browser.wait(EC.presenceOf(this.layout), BROWSER_WAIT_TIMEOUT);
  }

  async refresh() {
    await browser.refresh();
    await this.waitForApp();
  }

  async isGenericErrorDisplayed() {
    return await this.genericError.isDisplayed();
  }

  async getGenericErrorTitle() {
    return await this.genericErrorTitle.getText();
  }
}
