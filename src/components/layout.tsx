import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
