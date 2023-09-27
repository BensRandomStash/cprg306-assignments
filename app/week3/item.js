export default function Item(name, quantity, category) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{quantity}</h3>
            <h3>{category}</h3>
        </div>
    );
}