import React, { useState } from 'react';

export default function FormProducts({ data2, modalForm, setModalForm }) {
  const [listProduct, setListProduct] = useState([{ tipo: '', cantidad: '' }]);

  // formulario de pedido

  const [newPedido, setNewPedido] = useState({
    description: '',
    namePerson: '',
    phone: '',
    costo: '',
    delivery: '',
    producto: listProduct,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(newPedido);

    // if (query.id) {
    //   await updateProduct();
    // } else {
    //   await createProduct();
    // }
    // await push(router.pathname);
    // await setModal(false);
  };

  const handleChange = (e) =>
    setNewPedido({ ...newPedido, [e.target.name]: e.target.value });

  const handleChange2 = (e) =>
    setListProduct([{ ...listProduct, [e.target.name]: e.target.value }]);
  return (
    <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5
            className="text-xl font-medium leading-normal text-gray-800"
            id="exampleModalScrollableLabel">
            Crear pedido
          </h5>
          <button
            type="button"
            className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-toggle="authentication-modal"
            onClick={() => setModalForm(false)}>
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
          <div className="flex items-center gap-x-4">
            <label
              htmlFor="namePerson"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Nombre
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="namePerson"
              id="namePerson"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              required
            />
          </div>
          <div className="flex items-center gap-x-4 pb-4 border-b border-gray-200">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Celular
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="phone"
              id="phone"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 "
              required
            />
          </div>
          {/* todavia no */}
          {/* {listProduct.map((item, index) => ( */}
          <div
            className="flex flex-row justify-between items-center "
            // key={index}
          >
            <select name="pets" id="pet-select">
              {data2.map((item, index) => (
                <option key={index} value="tipo">
                  {item.tipo}
                </option>
              ))}
            </select>
            <input
              onChange={handleChange2}
              // value={item.cantidad}
              type="number"
              name="cantidad"
              placeholder="cantidad"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 w-1/6"
            />
            <button
              type="button"
              className="inline-block px-1 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
              x
            </button>
          </div>
          <div
            className="flex flex-row justify-between items-center "
            // key={index}
          >
            <select name="pets" id="pet-select">
              {data2.map((item, index) => (
                <option key={index} value="tipo">
                  {item.tipo}
                </option>
              ))}
            </select>
            <input
              onChange={handleChange2}
              // value={item.cantidad}
              type="number"
              name="cantidad"
              placeholder="cantidad"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1.5 w-1/6"
            />
            <button
              type="button"
              className="inline-block px-1 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
              x
            </button>
          </div>
          {/* ))} */}

          {/* todavia no */}

          <div className="flex justify-center border-b border-gray-200 pb-4">
            <button
              type="button"
              onClick={() => {
                setListProduct([...listProduct, { tipo: '', cantidad: '' }]);
              }}
              className="rounded-full inline-block px-2.5 py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
              +
            </button>
          </div>

          <div className="flex items-center gap-x-4 pb-0 ">
            <label
              htmlFor="costo"
              className="block text-sm font-medium text-gray-900 ">
              $
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="costo"
              id="costo"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-1.5"
              placeholder="Costo"
              required
            />
          </div>
          <div className="flex items-center gap-x-4 pb-4 border-b border-gray-200 mt-0">
            <label
              htmlFor="delivery"
              className="block text-sm font-medium text-gray-900 ">
              Entrega
            </label>
            <input
              onChange={handleChange}
              type="date"
              name="delivery"
              id="delivery"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-1.5"
              required
            />
          </div>
          <div className="flex items-center gap-x-4 pb-4 border-b border-gray-200">
            <textarea
              onChange={handleChange}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="description"
              id="description"
              rows="3"
              placeholder="Your message"></textarea>
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={() => console.log(listProduct)}
              type="submit"
              className="order-last w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Add
            </button>
            <button
              type="submit"
              onClick={() => setModalForm(false)}
              className="w-1/3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
