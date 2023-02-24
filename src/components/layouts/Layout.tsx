import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>

      </Head>

      <nav>
        <Navbar />
      </nav>

      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
