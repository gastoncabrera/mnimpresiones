import React from 'react';
import Link from 'next/link';

export default function navbar() {
  return (
    <div className="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul className="relative">
        <li className="relative">
          <Link href="/stock">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark">
              Stock
            </a>
          </Link>
        </li>
        <li className="relative">
          <Link href="/products">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark">
              Productos
            </a>
          </Link>
        </li>
        <li className="relative">
          <Link href="/complete">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
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
