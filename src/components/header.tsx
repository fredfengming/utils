import Image from "next/image";
import Link from "next/link";
import { appConfig } from "../app/app.config";
import Container from "./container";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between items-center h-full bg-cover bg-center"
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

export default Header;
