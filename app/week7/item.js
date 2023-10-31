export default function Item(item, onSelect) {
    return ( 
        <div>
            <button onClick={onSelect(item)}></button>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.quantity}</h3>
            <h3>{item.category}</h3>
        </div>
    );
}