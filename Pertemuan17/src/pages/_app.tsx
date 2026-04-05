import '../styles/globals.css'
import Navbar from '@/components/layouts/navbar'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/Appshell'
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <>
      {/* {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )} */}
      <SessionProvider session={pageProps.session}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
    </>
  );
}
