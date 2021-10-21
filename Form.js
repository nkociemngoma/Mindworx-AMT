import React from "react";

export default class Form extends React.Component {
  state = {
    AssetName: "",
    BrandName: "",
    AssetUser: "",
    Emailaddress: "",
    SerialNumber: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
    AssetName: "",
    BrandName: "",
    AssetUser: "",
    Emailaddress: "",
    SerialNumber: ""
    });
    this.props.onChange({
    AssetName: "",
    BrandName: "",
    AssetUser: "",
    Emailaddress: "",
    SerialNumber: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="assetName"
          placeholder="Asset name"
          value={this.state.AssetName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="brandName"
          placeholder="Brand name"
          value={this.state.brandName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="assetUser"
          placeholder="Asset User"
          value={this.state.assetsuser}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="emailaddress"
          placeholder="Email address"
          value={this.state.emailaddress}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="serialNumber"
          type="SerialNumber"
          placeholder="Serial Number"
          value={this.state.serialNumber}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
