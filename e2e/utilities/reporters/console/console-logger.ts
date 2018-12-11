/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

/* tslint:disable */
const chalk = require('chalk');
/* tslint:enable */

export const log = {
    i: 0,

    get indentation(): string {
        return new Array(this.i).fill('   ').join('');
    },

    indent() {
        this.i++;
        return this;
    },

    unindent() {
        this.i--;
        return this;
    },

    log(message: string = '', options: any = { ignoreIndentation: false }) {
        const indentation = (!options.ignoreIndentation)
            ? this.indentation
            : '';

        console.log(`${indentation}${message}`);

        return this;
    },

    blank() {
        return this.log();
    },

    info(message: string = '', options: any = { bold: false, title: false }) {
        const { bold } = options;
        const style = (bold ? chalk.bold : chalk).gray;

        return this.log(style(message), options);
    },

    success(message: string = '', options: any = { bold: false }) {
        const style = options.bold ? chalk.bold.green : chalk.green;

        return this.log(style(message), options);
    },

    error(message: string = '', options: any = { bold: false }) {
        const style = options.bold ? chalk.bold.red : chalk.red;

        return this.log(style(message), options);
    }
};
