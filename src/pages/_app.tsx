import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { Component } from 'react';

import 'styles/globals.css'

type NextPageWithLayout = NextPage & {
  layout?: {
    c: new () => Component,
    props?: Record<string, any>
  }
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.layout) {
    const Layout = Component.layout.c;
    const layoutProps = Component.layout.props;

    return (
      <Layout {...layoutProps} >
        <Component {...pageProps} />
      </Layout>
    );
  }

  return <Component {...pageProps} />;
}

export default App;
