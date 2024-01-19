import React from "react";
import Link from "next/link";
import Container from "./container";

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

export default Nav;
