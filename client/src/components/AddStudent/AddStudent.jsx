import React, { Component } from 'react';
import './AddStudent.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends Component {
  state = {
    name: '',
    email: '',
    response: '',
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newStudent = await axios.post('/api/students/', {
        name: this.refs.name.value,
        email: this.refs.email.value,
        enrollnumber: this.refs.enrollnumber.value,
      });

      toast(
        'Item ' + newStudent.data.newStudent.name + ' Ready to be Swapped',
        { type: toast.TYPE.SUCCESS, autoClose: 3000 }
      );
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className='AddStudent-Wrapper'>
        <h1>Swap Your Item Here!</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor='name'>Item Name</label>
          <input

            placeholder='Item for Swap'

            onChange={this.onChangeHandler}
            ref='name'
            className='Add-Student-Input'
            required

            maxLength='120'
            id='name'
          />
          <label htmlFor='email'>
            email:
          </label>
          <input

            name='email'
            onChange={this.onChangeHandler}
            ref='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            className='Add-Student-Input'
            required
            id='email'
          />
          <label htmlFor='enrollnumber'>How Many Items... </label>
          <input
            max='120'
            onChange={this.onChangeHandler}
            ref='enrollnumber'
            className='Add-Student-Input'
            required
            id='enrollnumber'
          />
          <button
            type='submit'
            className='Add-Student-Submit fa fa-plus'
          ></button>
          <button
            type='reset'
            className='Add-Student-Reset fa fa-refresh'
          ></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
