import { useCallback, useMemo } from 'react';

export const Products = ({ products, cart, onSelect }) => {
    // Manual memoization
    const filteredProducts = useMemo(() => products.filter((p) => p.stock > 0), [products]);
    const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
    const handleClick = useCallback(() => console.log('Clicked!'), []);

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
