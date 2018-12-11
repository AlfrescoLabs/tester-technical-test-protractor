/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { promise } from 'protractor';
import { Header } from '../components/components';
import { Page } from './page';

export class BrowsingPage extends Page {
  header = new Header(this.app);

  async signOut() {
    await this.header.userInfo.signOut();
  }
}
