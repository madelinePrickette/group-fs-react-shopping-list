function Item({item}) {
    return(
        <>
            <h3>THIS IS AN ITEM</h3>
            <li>{item.name} {item.quantity} {item.unit}</li> 
        </>   
    )
}

export default Item;