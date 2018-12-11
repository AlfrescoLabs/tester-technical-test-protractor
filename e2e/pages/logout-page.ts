/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { Page } from './page';
import { APP_ROUTES } from '../configs';
import { Utils } from '../utilities/utils';

export class LogoutPage extends Page {
  /** @override */
  constructor() {
    super(APP_ROUTES.LOGIN);
  }

  /** @override */
  load() {
    // await Utils.clearLocalStorage();
    // await Utils.clearSessionStorage();
    return super.load();
  }
}
