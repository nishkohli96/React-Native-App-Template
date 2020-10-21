import React from 'react';
import { I18nextProvider } from 'react-i18next';
import Index from '@app/Index';
import geti18config from '@i18next/i18config';

const AppConfig = () => {
    return (
        <I18nextProvider i18n={geti18config()}>
            <Index />
        </I18nextProvider>
    );
};

export default function App() {
    return <AppConfig />;
}
