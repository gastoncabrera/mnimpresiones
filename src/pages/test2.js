import React from 'react';
import ReactDOM from 'react-dom';

export default class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      shareholders: [{ name: '' }],
    };
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, shareholders } = this.state;
    // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    console.log(this.state);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: '' }]),
    });
  };

  handleRemoveShareholder = (idx) => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company name, e.g. Magic Everywhere LLC"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder" key={idx}>
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small">
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small">
          Add Shareholder
        </button>
        <button>Incorporate</button>
      </form>
    );
  }
}
