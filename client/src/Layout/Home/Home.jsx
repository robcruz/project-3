import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
// Components
import Item from '../../components/Item/Item';
import SearchItems from '../../components/SearchItem/SearchItems';

class Home extends Component {
  state = {
    data: null,
    allItems: null,
    error: '',
  };

  async componentDidMount() {
    try {
      let items;
      items = await axios('/api/items/');
      this.setState({ data: items.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeItem = async id => {
    try {
      let itemRemoved;
      itemRemoved = await axios.delete(`/api/items/${id}`);
      let items;
      items = await axios('/api/items/');
      this.setState({ data: items.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchItems = async username => {
    let allItems;
    allItems = [...this.state.data.items];
    if (this.state.allItems === null) this.setState({ allItems: allItems });

    let items;

    items = this.state.data.items.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );

    if (items.length > 0) this.setState({ data: { items: items } });

    if (username.trim() === '')
      this.setState({ data: { items: this.state.allItems } });
  };

  render() {
    let items;

    if (this.state.data)
      items =
        this.state.data.items &&
        this.state.data.items.map(item => (
          <Item key={item._id} {...item} removeItem={this.removeItem} />
        ));
    else
      return (
        <div className='Spinner-Wrapper'>
          {' '}
          <PropagateLoader color={'#333'} />{' '}
        </div>
      );

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.items.length)
        return <h1 className='No-Items'>No Item(s)</h1>;

    return (
      <div className="BG">
        <div className="homeTable">
          <h1>Check Out the Latest Deals, Here!</h1>
          <hr></hr>
          <hr></hr>
          <SearchItems searchItems={this.searchItems} />
          <table className='Table'>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Email</th>
                <th>Number of Item(s)</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
