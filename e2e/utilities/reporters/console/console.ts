/*!
 * @license
 * Alfresco Example Technical Test
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Technical Test
 */

import { log } from './console-logger';

const errors = [];

export const consoleReporter = {
    jasmineStarted(suiteInfo) {
        log.blank().info(
            `Running ${suiteInfo.totalSpecsDefined} tests`,
            { bold: true, title: true }
        ).blank();
    },

    suiteStarted(suite) {
        log.info(suite.description).indent();
    },

    specDone: (spec) => {
        const {
            status,
            description,
            failedExpectations
        } = spec;

        if (status === 'passed') {
            log.success(`∙ ${description}`);
        }

        if (status === 'failed') {
            log.error(`✕ ${description}`, { bold: true });

            errors.push(spec);

            failedExpectations.forEach((failed) => {
                log.error(`  ${failed.message}`);
            });
        }
    },

    suiteDone: (result) => {
        log.unindent();
    },

    jasmineDone: (result) => {
        if (!!errors.length) {
            log .blank()
                .blank()
                .info(`${errors.length} failing tests`, { bold: true, title: true });

            errors.forEach(error => {
                log .blank()
                    .error(`✕ ${error.fullName}`, { bold: true });

                error.failedExpectations.forEach(failed => {
                    log .info(`${failed.message}`)
                        .blank()
                        .error(`${failed.stack}`);
                });
            });
        } else {
            log.success(`All tests passed!`, { bold: true });
        }

        log.blank().blank();
    }
};
