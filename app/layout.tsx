import React from 'react';
import Head from 'next/head';
import Container from "../components/Container/index";
import  Header  from '../components/Header/index';
import  Footer  from '../components/Footer/index';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Artis Webshop</title>
        <meta name="description" content="The best artis webshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <main className="flex-1">{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;