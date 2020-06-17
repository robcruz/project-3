import React, { Component } from "react";
import './EditItem.css';
import axios from "axios";
import { withRouter } from 'react-router'
import { toast, ToastContainer } from "react-toastify";

class EditItem extends Component {
  state = {
    id: '',
    name: "",
    email: "",
    itemNumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
      let search = this.props.location.search,
        id = search.substring(1, search.length);
      const updateItem = await axios(`/api/items/${id}`);
      const { name, email, itemNumber } = updateItem.data.item;
      this.setState({ id, name, email, itemNumber });
    } catch (err) {
      this.setState({ response: "Item not found!" })
    }
  };

  updateItemHandler = async (e) => {
    e.preventDefault();
    try {
      const item = await axios.put(`/api/items/${this.state.id}`, {
        name: this.refs.name.value,
        email: this.refs.email.value,
        itemNumber: this.refs.itemNumber.value
      });
      toast(item.data.message, { type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Item not Found")
      return <h1>Item Not Found!</h1>
    return (
      <div className="Edit-Item-Wrapper">
        <h1>Edit Your Item</h1>
        <form onSubmit={this.updateItemHandler} className="formContainerEdit">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            placeholder="Name..."
            value={this.state.name}
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Item-Input"
            id="name"

          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={this.state.email}
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Item-Input"
            id="email"
          />
          <label htmlFor="itemNumber">Item Count:</label>
          <input
            type="text"
            placeholder="Enter item count here"
            value={this.state.itemNumber}
            name="itemNumber"
            required
            onChange={this.onChangeHandler}
            ref="itemNumber"
            className="Edit-Item-Input"
            id="email"
          />
          <button type="submit" className="Edit-Item-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditItem);
