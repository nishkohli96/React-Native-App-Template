import React from 'react';
import { I18nextProvider } from 'react-i18next';
import Index from '@App/Index';
import geti18config from '@I18Next/i18config';

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
