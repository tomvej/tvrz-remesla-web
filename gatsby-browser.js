/* globals __SENTRY_RELEASE__ */
import React from 'react';
import * as Sentry from '@sentry/browser';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {NavbarContextProvider} from './src/components';
import 'whatwg-fetch';

config.autoAddCss = false;

export const onClientEntry = () => {
    // IntersectionObserver polyfill for IE 11
    if (!('IntersectionObserver' in window)) {
        import('intersection-observer');
    }

    if (process.env.NODE_ENV === 'production') {
        Sentry.init({
            release: __SENTRY_RELEASE__,
            dsn: 'https://123831066ab64274b0eb9a2e924833e3@sentry.io/1452667',
        });
    }
}

export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        {element}
    </NavbarContextProvider>
)
