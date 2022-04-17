import { React, useState } from 'react';
import { useRouter } from 'next/router';
import { Confirm } from 'semantic-ui-react';

import FormProducts from '../../components/shared/FormProducts';

export default function index({ data }) {
  return !data ? (
    <div>Cargando...</div>
  ) : (
    <>
      <div className="flex gap-10 flex-wrap ">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Tipo
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Cantidad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter((item) => item.isComplete == true)
                      .map((item, index) => (
                        <tr
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.delivery
                              .split('-')
                              .reverse()
                              .map((item, index) => {
                                if (index !== 2) return item + '-';
                                else return item;
                              })}
                          </td>
                          <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.pedido.map((item, index) => (
                              <div key={index}>
                                {item.tipo} - {item.cantidad}
                              </div>
                            ))}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.costo}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/pedido`);
  const data = await res.json();
  const res2 = await fetch(`http://localhost:3000/api/stock`);
  const data2 = await res2.json();
  return { props: { data, data2 } };
}
