import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx';
import List from '../List/List.jsx';


function App() {

    useEffect(() => {
        getList();
    }, []);

    const [shoppingList, setShoppingList] = useState([]);

    const getList = () => {
        axios({
            method: 'GET',
            url: '/shopping'
        }).then( response => {
            console.log('data from GET', response.data);
            setShoppingList(response.data);
        }).catch( err => {
            console.log('client GET', err);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <Form />
                <List dog={shoppingList}/>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
