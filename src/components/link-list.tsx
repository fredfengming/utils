import React from "react";
import Link from "next/link";

type Item = {
  text: string;
  href: string;
};

type Props = {
  listName: string;
  items: Item[];
};

const LinkList = ({ listName, items }: Props) => {
  return (
    <>
      <table className="table-fixed w-full text-left">
        <thead className="dark:text-gray-400 uppercase">
          <tr>
            <th scope="col" className="px-0 py-3">
              {listName}
            </th>
          </tr>
        </thead>

        {items.length > 0 && (
          <tbody>
            {items.map((item) => (
              <tr>
                <th scope="row" className="px-2 py-2">
                  &#183;&nbsp;
                  <Link href={item.href} aria-label={item.text}>
                    {item.text}
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default LinkList;
