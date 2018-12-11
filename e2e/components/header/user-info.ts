/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { ElementFinder, by } from 'protractor';
import { Menu } from '../menu/menu';
import { Component } from '../component';

export class UserInfo extends Component {
  private locators = {
    avatar: by.css('.current-user__avatar'),
    fullName: by.css('.current-user__full-name'),
    menuItems: by.css('[mat-menu-item]')
  };

  fullName: ElementFinder = this.component.element(this.locators.fullName);
  avatar: ElementFinder = this.component.element(this.locators.avatar);

  menu: Menu = new Menu();

  constructor(ancestor?: ElementFinder) {
    super('aca-current-user', ancestor);
  }

  async openMenu() {
    const { menu, avatar } = this;

    await avatar.click();
    await menu.wait();
    return menu;
  }

  getName() {
    return this.fullName.getText();
  }

  async signOut() {
    const menu = await this.openMenu();
    await menu.clickMenuItem('Sign out');
  }
}
