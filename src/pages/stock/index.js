import React from "react";

export default function index({ data }) {
  return !data ? (
    <div>Cargando...</div>
  ) : (
    <div>
      {data.map((item) => (
        <ul>
          <li className="text-3xl font-bold ">
            Hay en stock {item.cantidad} {item.tipo}
          </li>
        </ul>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock`);
  const data = await res.json();
  return { props: { data } };
}
