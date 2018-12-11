/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

export const BROWSER_RESOLUTION_WIDTH = 1200;
export const BROWSER_RESOLUTION_HEIGHT = 800;

export const BROWSER_WAIT_TIMEOUT = 10000;

// Application configs
export const USE_HASH_STRATEGY = true;

// Repository configs
export const REPO_API_HOST = 'http://localhost:8080';
export const REPO_API_TENANT = '-default-';

// Admin details
export const ADMIN_USERNAME = 'admin';
export const ADMIN_PASSWORD = 'admin';
export const ADMIN_FULL_NAME = 'Administrator';

export const E2E_ROOT_PATH = __dirname;

// Application Routes
export const APP_ROUTES = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  PERSONAL_FILES: '/personal-files'
};
