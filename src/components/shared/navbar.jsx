import React from 'react';
import Link from 'next/link';

export default function navbar() {
  return (
    <div className="py-3 w-60 h-full shadow-md bg-black px-1 fixed">
      <h1 className="text-xl pt-4 pb-12 px-6 h-12 overflow-hidden text-[#A4A6B3] font-bold text-ellipsis whitespace-nowrap rounded">
        Logo
      </h1>
      <ul className="py-6 relative">
        <li className="relative">
          <Link href="/stock">
            <a
              className=" flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#DDE2FF] text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark">
              Stock
            </a>
          </Link>
        </li>
        <li className="relative">
          <Link href="/products">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#DDE2FF] text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark">
              Productos
            </a>
          </Link>
        </li>
        <li className="relative">
          <Link href="/complete">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-[#DDE2FF] text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark">
              Completados
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
