import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import Layout from '../components/shared/layout';
import Header from '../components/shared/header';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="ml-[240px]">
        <Header>
          <Component {...pageProps} />
        </Header>
      </div>
    </Layout>
  );
}

export default MyApp;
