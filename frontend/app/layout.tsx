'use client';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import './globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const apolloClient = useApollo(null);

    return (
        <html lang="en">
        <body>
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
        </body>
        </html>
    );
}
