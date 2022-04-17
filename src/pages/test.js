import React, { useState } from 'react';

export default function FormProducts() {
  const [newPedido, setNewPedido] = useState({
    // description: '',
    // namePerson: '',
    // phone: '',
    // costo: '',
    // delivery: '',
    // producto: [],
    name: '',
    shareholders: [{ name: '' }],
  });

  const handleNameChange = (evt) => {
    setNewPedido({ name: evt.target.value });
  };

  const handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = newPedido.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    setNewPedido({ shareholders: newShareholders });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, shareholders } = newPedido;
    // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    console.log(newPedido);
  };

  const handleAddShareholder = () => {
    setNewPedido({
      shareholders: newPedido.shareholders.concat([{ name: '' }]),
    });
  };

  const handleRemoveShareholder = (idx) => () => {
    setNewPedido({
      shareholders: newPedido.shareholders.filter((s, sidx) => idx !== sidx),
    });
  };

  console.log(newPedido.shareholders);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company name, e.g. Magic Everywhere LLC"
        value={newPedido.name}
        name={newPedido.name}
        onChange={handleNameChange}
      />

      <h4>Shareholders</h4>

      {newPedido.shareholders.map((shareholder, idx) => (
        <div className="shareholder" key={idx}>
          <input
            type="text"
            placeholder={`Shareholder #${idx + 1} name`}
            value={shareholder.name}
            onChange={handleShareholderNameChange(idx)}
          />
          <button
            type="button"
            onClick={handleRemoveShareholder(idx)}
            className="small">
            -
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddShareholder} className="small">
        Add Shareholder
      </button>
      <button>Incorporate</button>
    </form>
  );
}
