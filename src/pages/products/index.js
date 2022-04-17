import { React, useState } from 'react';
import { useRouter } from 'next/router';
import { Confirm } from 'semantic-ui-react';

import FormProducts from '../../components/shared/FormProducts';

export default function index({ data, data2, modalForm, setModalForm }) {
  const [test, setTest] = useState({ id: '', tipo: '' });
  const { push } = useRouter();
  // console.log(data2);

  const [openModal, OpenModal] = useState(false);
  const [openModalComplete, setOpenModalComplete] = useState(false);

  // --------- modal delete

  const open = () => OpenModal(true);
  const close = () => OpenModal(false);

  // --------- modal complete

  const openComplete = () => setOpenModalComplete(true);
  const closeComplete = () => setOpenModalComplete(false);

  // ------------ funcion delete

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/pedido/${id}`, {
        method: 'DELETE',
      });
      push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/pedido/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isComplete: true }),
      });
    } catch (error) {
      console.error(error);
    }
    push('/products');
  };

  return !data ? (
    <div>Cargando...</div>
  ) : (
    <>
      <div className="flex gap-10 flex-wrap ">
        {data
          .filter((item) => item.isComplete == false)
          .map((item, index) => (
            <div className="flex" key={index}>
              <div className="flex flex-col w-80 rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-1 px-6 font-medium">😄{item.namePerson}</div>
                <div className="py-1 px-6 border-b border-gray-300 font-extralight">
                  📞{item.phone}
                </div>
                <div className="p-6 flex flex-col gap-y-3">
                  {item.pedido.map((p, index) => (
                    <div
                      className="flex justify-between border-b border-gray-300 "
                      key={index}>
                      <div>{p.tipo}</div>
                      <div>{p.cantidad}</div>
                    </div>
                  ))}
                </div>
                <p className="p-3  text-gray-700 text-base">
                  falta : ${item.costo - (item.sena || 0)}
                </p>
                <p className="p-3  text-gray-700 text-base">
                  {item.delivery
                    .split('-')
                    .reverse()
                    .map((item, index) => {
                      if (index !== 2) return item + '-';
                      else return item;
                    })}
                </p>
                <p className="p-3  text-gray-700 text-base">
                  {item.description}
                </p>
                <div className="py-3 px-6 mt-auto border-t border-gray-300 text-gray-600">
                  <button
                    type="button"
                    onClick={async () => {
                      setTest({ id: item._id, tipo: item.tipo });
                      open();
                    }}
                    className="mr-2 inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    eliminar
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      setTest({ id: item._id, tipo: item.tipo });
                      openComplete();
                    }}
                    className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                    completado
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {openModal && (
        <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div>
              <div className="pt-6 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel">
                  Eliminar
                </h5>
                <div className="flex justify-evenly">
                  <button
                    type="submit"
                    onClick={async () => {
                      deleteProduct(test.id);
                      close();
                    }}
                    className="order-last w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Confirmar
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
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
      {openModalComplete && (
        <div className="bg-gray-900/75 absolute top-0 left-0  w-full h-full grid justify-center content-center">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-[32rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div>
              <div className="pt-6 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel">
                  Completar
                </h5>
                <div className="flex justify-evenly">
                  <button
                    type="submit"
                    onClick={async () => {
                      updateProduct(test.id);
                      closeComplete();
                    }}
                    className="order-last w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Confirmar
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      closeComplete();
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
      {modalForm && (
        <FormProducts
          modalForm={modalForm}
          setModalForm={setModalForm}
          data2={data2}
        />
      )}
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
