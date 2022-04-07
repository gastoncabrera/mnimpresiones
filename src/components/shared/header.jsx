import { React, useState } from 'react';
import { useRouter } from 'next/router';

import FormProducts from '../../pages/products/index';

export default function header({ children, modalForm, setModalForm }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ tipo: '', cantidad: '' });
  const [errors, setErrors] = useState({ tipo: '', cantidad: '' });

  const validate = () => {
    const errors = {};

    if (!newProduct.tipo) errors.tipo = 'Tipo is required';
    if (!newProduct.cantidad) errors.cantidad = 'Cantidad is required';

    return errors;
  };

  const { query, push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);

    if (query.id) {
      await updateProduct();
    } else {
      await createProduct();
    }
    await push(router.pathname);
    await setModal(false);
  };

  const handleChange = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

  const createProduct = async () => {
    try {
      await fetch('http://localhost:3000/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    try {
      await fetch('http://localhost:3000/api/stock/' + query.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/stock/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="py-6 relative w-full flex flex-wrap items-center justify-between text-gray-500 hover:text-gray-700 focus:text-gray-700 ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <h1 className="text-xl text-black capitalize">
            {router.pathname.substring(1)}
          </h1>
          {router.pathname == '/stock' && (
            <button
              type="button"
              onClick={() => setModal(!modal)}
              className="mr-20 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Añadir producto
            </button>
          )}
          {router.pathname == '/products' && (
            <button
              type="button"
              onClick={() => setModalForm(true)}
              className="mr-20 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Añadir pedido
            </button>
          )}
        </div>
      </nav>

      <main className="px-4">{children}</main>

      {modal && router.pathname == '/stock' && (
        <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel">
                Agregar producto
              </h5>
              <button
                type="button"
                className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="authentication-modal"
                onClick={() => setModal(false)}>
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
                  Add
                </button>
                <button
                  type="submit"
                  onClick={() => setModal(false)}
                  className="w-1/3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
