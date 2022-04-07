import { React, useState } from 'react';
import { useRouter } from 'next/router';

export default function index({ data }) {
  const [test, setTest] = useState({ id: '', tipo: '' });
  const [form, setForm] = useState({ id: '', tipo: '', cantidad: '' });

  const { push } = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [edit, setEdit] = useState(false);

  // --------- modal delete

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  // --------- modal edit

  const openEdit = () => setEdit(true);

  const closeEdit = () => setEdit(false);

  // --------- funtions

  const validate = () => {
    const errors = {};

    if (!form.tipo) errors.tipo = 'Tipo is required';
    if (!form.cantidad) errors.cantidad = 'cantidad is required';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);

    await updateProduct(form.id);

    await closeEdit();

    await setForm({ id: '', tipo: '', cantidad: '' });

    push('/stock');
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/stock/${id}`, {
        method: 'DELETE',
      });
      push('/stock');
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id) => {
    try {
      await fetch('http://localhost:3000/api/stock/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return !data ? (
    <div>Cargando...</div>
  ) : (
    <>
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
                          onClick={async () => {
                            setForm({
                              id: item._id,
                              tipo: item.tipo,
                              cantidad: item.cantidad,
                            });
                            openEdit();
                          }}
                          className="mr-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                          Editar
                        </button>
                        <button
                          onClick={async () => {
                            setTest({ id: item._id, tipo: item.tipo });
                            open();
                          }}
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

      {confirm && (
        <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div>
              <div className="pt-6 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel">
                  Eliminar
                </h5>
                <p>Producto: {test.tipo}</p>
                <div className="flex justify-evenly">
                  <button
                    type="submit"
                    onClick={async () => {
                      deleteProduct(test.id);
                      close();
                      setTest('');
                    }}
                    className="order-last w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Confirmar
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      setTest('');
                      close();
                    }}
                    className="w-1/4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {edit && (
        <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel">
                Editar producto
              </h5>
              <button
                type="button"
                className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="authentication-modal"
                onClick={closeEdit}>
                <svg
                  className="w-6 h-6"
                  fill="#626262"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <form
              className="pt-6 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="tipo"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Producto
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="tipo"
                  id="tipo"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  defaultValue={form.tipo}
                />
              </div>
              <div>
                <label
                  htmlFor="cantidad"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Cantidad
                </label>
                <input
                  onChange={handleChange}
                  defaultValue={form.cantidad}
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 "
                  required
                />
              </div>
              <div className="flex justify-evenly">
                <button
                  type="submit"
                  className="order-last w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Editar
                </button>
                <button
                  type="submit"
                  onClick={closeEdit}
                  className="w-1/3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock`);
  const data = await res.json();
  return { props: { data } };
}
