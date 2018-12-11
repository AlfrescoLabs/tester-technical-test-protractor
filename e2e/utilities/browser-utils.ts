/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { browser } from 'protractor';
import { USE_HASH_STRATEGY } from '../configs';

export async function navigate(relativePath: string) {
  const path = [
    browser.baseUrl,
    browser.baseUrl.endsWith('/') ? '' : '/',
    USE_HASH_STRATEGY ? '#' : '',
    relativePath.startsWith('/') ? '' : '/',
    relativePath
  ].join('');

  return browser.get(path);
}
