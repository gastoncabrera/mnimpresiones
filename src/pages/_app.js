import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import Layout from '../components/shared/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="ml-[240px]">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
