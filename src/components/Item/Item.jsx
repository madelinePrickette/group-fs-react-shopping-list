import axios from 'axios';

function Item({item, getList}) {
    const handleDelete = () => {
        console.log('item in DELETE');
        console.log(item.id);
        
        axios({
            method: 'DELETE',
            url: `/shopping/${item.id}`
        }).then(response => {
            console.log('item DELETE', response.data);
            getList();
        }).catch(err => {
            console.log('item DELETE', err);
        })
        
    }

    return(
        <>
            <h3>THIS IS AN ITEM</h3>
            <li>{item.name} {item.quantity} {item.unit}</li> 
            <button onClick={handleDelete}>Delete</button>
        </>   
    )
}

export default Item;