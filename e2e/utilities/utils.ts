/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { browser, protractor, promise, ElementFinder, ExpectedConditions as EC } from 'protractor';
import { BROWSER_WAIT_TIMEOUT, E2E_ROOT_PATH } from '../configs';
const path = require('path');
const fs = require('fs');

export class Utils {
  // generate a random value
  static random() {
    return Math.random().toString(36).substring(5, 10).toLowerCase();
  }

  // local storage
  static clearLocalStorage(): promise.Promise<any> {
    return browser.executeScript('window.localStorage.clear();');
  }

  // session storage
  static clearSessionStorage(): promise.Promise<any> {
    return browser.executeScript('window.sessionStorage.clear();');
  }

  static getSessionStorage() {
    return browser.executeScript('return window.sessionStorage.getItem("aca.extension.config");');
  }

  static setSessionStorageFromConfig(key: string, configFileName: string) {
    const configFile = `${E2E_ROOT_PATH}/resources/extensibility-configs/${configFileName}`;
    const fileContent = JSON.stringify(fs.readFileSync(configFile, { encoding: 'utf8' }));

    return browser.executeScript(`window.sessionStorage.setItem(${key}, ${fileContent});`);
  }

  static retryCall(fn: () => Promise<any>, retry: number = 30, delay: number = 1000): Promise<any> {
    const pause = duration => new Promise(res => setTimeout(res, duration));

    const run = retries => fn().catch(err => (retries > 1 ? pause(delay).then(() => run(retries - 1)) : Promise.reject(err)));

    return run(retry);
  }

  static async waitUntilElementClickable(element: ElementFinder) {
    return await browser.wait(EC.elementToBeClickable(element), BROWSER_WAIT_TIMEOUT).catch(Error);
  // static waitUntilElementClickable(element: ElementFinder) {
  //   return browser.wait(EC.elementToBeClickable(element), BROWSER_WAIT_TIMEOUT);
  }

  static async typeInField(elem: ElementFinder, value: string) {
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      await elem.sendKeys(c);
      await browser.sleep(100);
    }
  }

  static formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US');
  }
}
