import React from 'react';
import { useRouter } from 'next/router';
import ReactDOM from 'react-dom';

export default class IncorporationForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      description: '',
      namePerson: '',
      phone: '',
      costo: '',
      sena: '',
      delivery: '',
      pedido: [{ tipo: '', cantidad: '' }],
    };
  }

  handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  };
  handleNamePersonChange = (evt) => {
    this.setState({ namePerson: evt.target.value });
  };
  handlePhoneChange = (evt) => {
    this.setState({ phone: evt.target.value });
  };
  handleCostoChange = (evt) => {
    this.setState({ costo: evt.target.value });
  };
  handleSenaChange = (evt) => {
    this.setState({ sena: evt.target.value });
  };
  handleDeliveryChange = (evt) => {
    this.setState({ delivery: evt.target.value });
  };

  handleShareholderTipoChange = (idx) => (evt) => {
    const newShareholders = this.state.pedido.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, tipo: evt.target.value };
    });

    this.setState({ pedido: newShareholders });
  };

  handleShareholderCantidadChange = (idx) => (evt) => {
    const newShareholders = this.state.pedido.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, cantidad: evt.target.value };
    });

    this.setState({ pedido: newShareholders });
  };

  handleSubmit = async (evt) => {
    console.log(this.state);
    evt.preventDefault();

    try {
      await fetch('http://localhost:3000/api/pedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });

      this.props.setModalForm(false);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  handleAddShareholder = () => {
    this.setState({
      pedido: this.state.pedido.concat([{ tipo: '' }]),
    });
  };

  handleRemoveShareholder = (idx) => () => {
    this.setState({
      pedido: this.state.pedido.filter((s, sidx) => idx !== sidx),
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="pt-6 px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
        <div className="flex items-center gap-x-4">
          <label
            htmlFor="namePerson"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Nombre
          </label>
          <input
            required
            type="text"
            id="namePerson"
            value={this.state.namePerson}
            onChange={this.handleNamePersonChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>
        <div className="flex items-center gap-x-4 pb-6 border-b border-gray-200">
          <label
            htmlFor="phone"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Telefono
          </label>
          <input
            required
            type="number"
            id="phone"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>

        {this.state.pedido.map((producto, idx) => (
          <div className="shareholder flex justify-between" key={idx}>
            <select
              className="border border-gray-300 rounded-lg  p-1.5 px-4"
              value={producto.tipo}
              onChange={this.handleShareholderTipoChange(idx)}>
              <option value="" disabled>
                Opciones
              </option>
              {this.props.data2.map((item, index) => (
                <option key={index}>{item.tipo}</option>
              ))}
            </select>
            <input
              required
              type="text"
              placeholder={`Cantidad`}
              value={producto.cantidad || ''}
              onChange={this.handleShareholderCantidadChange(idx)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-1.5"
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="rounded inline-block px-2.5 py-1 bg-red-600 text-white font-medium text-sm leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
              x
            </button>
          </div>
        ))}

        <div className="flex justify-center border-b border-gray-200 pb-4">
          <button
            type="button"
            className="rounded-full inline-block px-2.5 py-1.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={this.handleAddShareholder}>
            +
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          <label
            htmlFor="costo"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Costo
          </label>
          <input
            type="number"
            id="costo"
            value={this.state.costo}
            onChange={this.handleCostoChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <label
            htmlFor="sena"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Seña
          </label>
          <input
            type="number"
            id="sena"
            value={this.state.sena}
            onChange={this.handleSenaChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <label
            htmlFor="delivery"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Fecha de entrega
          </label>
          <input
            type="date"
            id="delivery"
            value={this.state.delivery}
            onChange={this.handleDeliveryChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <label
            htmlFor="description"
            className="block w-1/4 text-sm font-medium text-gray-900 ">
            Descripcion
          </label>
          <textarea
            required
            type="text"
            id="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex justify-around">
          <button
            type="submite"
            className="order-last w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            submite
          </button>
          <a
            onClick={() => this.props.setModalForm(false)}
            className="inline-block w-1/3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Cancelar
          </a>
        </div>
      </form>
    );
  }
}
