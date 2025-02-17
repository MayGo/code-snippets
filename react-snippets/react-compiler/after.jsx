export const Products = ({ products, cart, onSelect }) => {
    // Auto-memoized by React Compiler 🎩✨
    const filteredProducts = products.filter((p) => p.stock > 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const handleClick = () => console.log('Clicked!');

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id} onClick={() => onSelect(product)}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
