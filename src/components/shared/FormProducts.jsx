import React, { useState } from 'react';

import Test from './test';

export default function FormProducts({ data2, modalForm, setModalForm }) {
  const [dropdown, setDropdown] = useState(false);

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
        <Test
          modalForm={modalForm}
          setModalForm={setModalForm}
          data2={data2}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
      </div>
    </div>
  );
}
