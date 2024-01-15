import Image from "next/image";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between items-center h-full py-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/header.jpg')",
        }}
      >
        <div className="w-full">
          <div className="container mx-auto flex flex-nowrapflex-row-reverse">
            <div className="flex-auto m-auto">
              <a
                className="bg-black p-4 align-middle bg-opacity-50 text-5xl font-bold"
                href="/"
                rel="home"
              >
                Ming's Wiki
              </a>
            </div>

            <Image
              className="flex-none"
              width="200"
              height="200"
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
