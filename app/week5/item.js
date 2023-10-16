export default function Item(item) {
    return (
        <div>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.quantity}</h3>
            <h3>{item.category}</h3>
        </div>
    );
}