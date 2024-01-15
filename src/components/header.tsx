import Image from "next/image";
import Link from "next/link";
import { appConfig } from "../app/app.config";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between items-center h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/header.jpg')",
        }}
      >
        <div className="w-full">
          <div className="container mx-auto flex flex-nowrapflex-row-reverse">
            <div className="flex-auto m-auto">
              <Link
                className="bg-black p-4 align-middle bg-opacity-50 text-5xl font-bold"
                href="/"
                rel="home"
              >
                {appConfig.siteName}
              </Link>
            </div>

            <Image
              className="flex-none rounded-3xl rotate-12"
              width="128"
              height="128"
              alt="Avatar"
              src="/assets/avatar.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
