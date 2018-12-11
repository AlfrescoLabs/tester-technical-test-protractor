/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { ElementFinder, ExpectedConditions as EC, browser } from 'protractor';
import { BROWSER_WAIT_TIMEOUT } from '../configs';

export abstract class Component {
  component: ElementFinder;

  constructor(selector: string, ancestor?: ElementFinder) {
    const locator = selector;

    this.component = ancestor
      ? ancestor.$$(locator).first()
      : browser.$$(locator).first();
  }

  async wait() {
    await browser.wait(EC.presenceOf(this.component), BROWSER_WAIT_TIMEOUT);
  }
}
