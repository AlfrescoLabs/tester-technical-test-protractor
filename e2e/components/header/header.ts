/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { ElementFinder, by, browser } from 'protractor';
import { Component } from '../component';
import { UserInfo } from './user-info';
import { protractor } from 'protractor';
import { Utils } from '../../utilities/utils';
import { Menu } from '../menu/menu';

export class Header extends Component {
  private locators = {
    root: 'app-header',
    logoLink: by.css('.app-menu__title'),
    userInfo: by.css('aca-current-user'),
    searchButton: by.css('#adf-search-button'),
    searchBar: by.css('#adf-control-input'),
    moreActions: by.id('app.header.more')
  };

  logoLink: ElementFinder = this.component.element(this.locators.logoLink);
  userInfo: UserInfo = new UserInfo(this.component);
  searchButton: ElementFinder = this.component.element(this.locators.searchButton);
  searchBar: ElementFinder = this.component.element(this.locators.searchBar);
  moreActions: ElementFinder = browser.element(this.locators.moreActions);

  menu: Menu = new Menu();

  constructor(ancestor?: ElementFinder) {
    super('adf-layout-header', ancestor);
  }

  async searchForText(text: string) {
    await this.searchBar.clear();
    await this.searchBar.sendKeys(text);
    await this.searchBar.sendKeys(protractor.Key.ENTER);
  }

  async waitForSearchButton() {
    await Utils.waitUntilElementClickable(this.searchButton);
  }

  async waitForSearchBar() {
    await Utils.waitUntilElementClickable(this.searchBar);
  }

  async openMoreMenu() {
    await this.moreActions.click();
    await this.menu.waitForMenuToOpen();
  }
}

