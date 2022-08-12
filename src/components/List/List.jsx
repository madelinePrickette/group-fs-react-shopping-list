import Item from '../Item/Item.jsx'

function List({dog, getList}) {
    return (
        <section>
            <h3>LIST GOES HERE</h3>
            <ul>
                {dog.map(item =>
                   <Item key={item.id} item={item} getList={getList}/> 
                )}
            </ul>
        </section>
    )
}

export default List;