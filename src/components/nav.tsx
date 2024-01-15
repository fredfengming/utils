import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/tools/docker">
                  <p>docker</p>
                </Link>
              </li>
              <li>
                <Link href="/tools/kubectl">
                  <p>kubectl</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;