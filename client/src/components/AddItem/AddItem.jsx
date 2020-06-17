import React, { Component } from 'react';
import './AddItem.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatIO from '../../components/Chat/ChatIO'

class AddItem extends Component {
    state = {
        name: '',
        email: '',
        response: '',
    };

    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

    addItem = async e => {
        e.preventDefault();
        try {
            const newItem = await axios.post('/api/items/', {
                name: this.refs.name.value,
                email: this.refs.email.value,
                itemNumber: this.refs.itemNumber.value,
            });

            toast('Item ' + newItem.data.newItem.name + ' Ready to be Swapped ', {
                type: toast.TYPE.SUCCESS,
                autoClose: 3000,
            });
        } catch (err) {
            toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
        }
    };

    render() {
        return (
            <div className='AddItem-Wrapper'>
                <h1>Swap Your Item Here!</h1>
                <form className="theform" onSubmit={this.addItem}>
                    <label htmlFor='name'>Item Name</label>
                    <input
                        placeholder='Item for Swap'
                        onChange={this.onChangeHandler}
                        ref='name'
                        className='Add-Item-Input'
                        required
                        maxLength='120'
                        id='name'
                    />
                    <label htmlFor='email'>email:</label>
                    <input 
                        placeholder='Your Email'
                        name='email'
                        onChange={this.onChangeHandler}
                        ref='email'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        className='Add-Item-Input'
                        required
                        id='email'
                    />
                    <label htmlFor='itemNumber'>How Many Items... </label>
                    <input
                        placeholder='Number of item(s)'
                        max='10'
                        onChange={this.onChangeHandler}
                        ref='itemNumber'
                        className='Add-Item-Input'
                        required
                        id='itemNumber'
                    />
                    <button type='submit' className='Add-Item-Submit fa fa-plus'></button>
                    <button
                        type='reset'
                        className='Add-Item-Reset fa fa-refresh'
                    ></button>
                </form>
                <ToastContainer />
            </div>
        );
    }
}

export default AddItem;
