import { AppProps } from 'next/app';

// Styling
import '@styles/globals.css';

// Parts
import Layout from '@components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
