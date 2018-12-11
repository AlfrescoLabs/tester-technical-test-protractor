/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { browser } from 'protractor';
import { LoginPage, LogoutPage, BrowsingPage } from '../../pages/pages';
import { APP_ROUTES, ADMIN_USERNAME, ADMIN_PASSWORD } from '../../configs';
import { navigate } from '../../utilities/browser-utils';

describe('Logout', () => {
  const page = new BrowsingPage();
  const loginPage = new LoginPage();
  const logoutPage = new LogoutPage();

  const testUser = {
    username: ADMIN_USERNAME,
    password: ADMIN_PASSWORD
  };

  beforeAll(async (done) => {
    done();
  });

  beforeEach(async (done) => {
    await loginPage.loginWith(testUser.username, testUser.password);
    done();
  });

  afterEach(async (done) => {
    await logoutPage.load();
    done();
  });

  it('Logout', async () => {
    await page.signOut();
    expect(await browser.getCurrentUrl()).toContain(APP_ROUTES.LOGIN);
  });

  it('Login mandated when user not logged in', async () => {
    await page.signOut();
    await navigate(APP_ROUTES.PERSONAL_FILES);
    expect(await browser.getCurrentUrl()).toContain(APP_ROUTES.LOGIN);
  });
});
