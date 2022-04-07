import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { useState } from 'react';

import Layout from '../components/shared/layout';
import Header from '../components/shared/header';

function MyApp({ data, Component, pageProps }) {
  const [modalForm, setModalForm] = useState(true);

  return (
    <Layout>
      <div className="ml-[240px]">
        <Header modalForm={modalForm} setModalForm={setModalForm}>
          <Component
            {...pageProps}
            modalForm={modalForm}
            setModalForm={setModalForm}
          />
        </Header>
      </div>
    </Layout>
  );
}

export default MyApp;
