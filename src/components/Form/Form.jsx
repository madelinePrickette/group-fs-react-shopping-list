import axios from 'axios';
import {useState} from 'react';

function Form ({getList}) {
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/shopping',
            data: {
                name: newItem,
                quantity: newQuantity,
                unit: newUnit
            }
        }).then((response) =>{
            console.log('response:', response);
            getList();
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');

        }).catch (function (error){
            console.log('error on add:', error);
        })
        
    }//end of handleSubmit ()

    return (
        <>
        <h3>FORM</h3>
        <form onSubmit = {handleSubmit}>
            <label>Name:</label>
            <input
                onChange={(event) => setNewItem(event.target.value)}
                value={newItem}
            />
            <label>Quantity:</label>
            <input
                onChange={(event) => setNewQuantity(event.target.value)}
                value={newQuantity}
            />

            <label>Unit:</label>
            <input
                onChange={(event) => setNewUnit(event.target.value)}
                value={newUnit}
            />
            <button type="submit">Submit</button>


        </form>
        </>
    )
}

export default Form;