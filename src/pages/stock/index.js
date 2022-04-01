import React from "react";

export default function index({ data }) {
  return !data ? (
    <div>Cargando...</div>
  ) : (
    <div className="flex items-center w-full h-full justify-center">
      <table className="border-separate border border-slate-300">
        <thead>
          <tr>
            <th className="border border-slate-300 p-4">Producto</th>
            <th className="border border-slate-300 pl-8 pr-8">Cantidad</th>
            <th className="border border-slate-300 pl-8 pr-8">Actions</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody>
            <tr className="">
              <td className="border border-slate-300 text-center p-4">{item.tipo}</td>
              <td className="border border-slate-300 text-center">{item.cantidad}</td>
              <td className="border border-slate-300 text-center">
                <button className="font-semibold text-white p-1 pl-4 pr-4 ml-8 mr-2 rounded bg-blue-600">
                  Edit
                </button>
                <button className="font-semibold text-white p-1 pl-4 pr-4 mr-8 ml-2 rounded bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock`);
  const data = await res.json();
  return { props: { data } };
}
