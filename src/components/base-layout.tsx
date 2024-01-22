import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { appConfig } from "../app/app.config";

type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

const Nav = () => {
  return (
    <>
      <div className="w-full h-10 mb-5 bg-gray-900">
        <Container>
          <div className="flex justify-between items-center h-full">
            <ul className="flex gap-x-6 text-white">
              <li>
                <Link href="/tools/docker" className="block py-2 pr-1 md:pr-2">
                  docker
                </Link>
              </li>
              <li>
                <Link href="/tools/kubectl" className="block py-2 pr-1 md:pr-2">
                  kubectl
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/header.jpg')",
        }}
      >
        <Container>
          <div className="flex flex-nowrapflex-row-reverse">
            <div className="flex-auto m-auto">
              <Link
                className="bg-black bg-opacity-50 text-5xl font-bold p-1 md:p-4"
                href="/"
                rel="home"
              >
                {appConfig.siteName}
              </Link>
            </div>

            <div className="flex-none w-16 md:w-32">
              <Link
                className="bg-black align-middle bg-opacity-50 text-5xl font-bold"
                href="/"
                rel="home"
              >
                <Image
                  className="rotate-12 rounded-xl md:w-32:rounded-4xl "
                  width="128"
                  height="128"
                  alt="Avatar"
                  src="/assets/avatar.jpg"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Nav />
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full py-5 bg-gray-900">
        <Container>
          <div className="items-center">
            <p>Copyright © 2024 Ming</p>
          </div>
        </Container>
      </div>
    </>
  );
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <div className="min-h-screen flex flex-col h-screen justify-between">
        <Header />
        <main className="mb-auto">
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
