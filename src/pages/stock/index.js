import React from 'react';

export default function index({ data }) {
  return !data ? (
    <div>Cargando...</div>
  ) : (
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
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.tipo}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.cantidad}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        className="mr-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Editar
                      </button>
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex items-center w-full h-full justify-center">
    //   <table className="border-separate border border-slate-300">
    //     <thead>
    //       <tr>
    //         <th className="border border-slate-300 p-4">Producto</th>
    //         <th className="border border-slate-300 pl-8 pr-8">Cantidad</th>
    //         <th className="border border-slate-300 pl-8 pr-8">Actions</th>
    //       </tr>
    //     </thead>
    //     {data.map((item, index) => (
    //       <tbody key={index}>
    //         <tr className="">
    //           <td className="border border-slate-300 text-center p-4">
    //             {item.tipo}
    //           </td>
    //           <td className="border border-slate-300 text-center">
    //             {item.cantidad}
    //           </td>
    //           <td className="border border-slate-300 text-center">
    //             <button className="font-semibold text-white p-1 pl-4 pr-4 ml-8 mr-2 rounded bg-blue-600">
    //               Edit
    //             </button>
    //             <button className="font-semibold text-white p-1 pl-4 pr-4 mr-8 ml-2 rounded bg-red-600">
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       </tbody>
    //     ))}
    //   </table>
    // </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock`);
  const data = await res.json();
  return { props: { data } };
}
