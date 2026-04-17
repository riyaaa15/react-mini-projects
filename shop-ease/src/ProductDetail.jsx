import { useParams } from "react-router-dom";
import { products } from "./data";

export default function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))

    return(
        <div className="product-card">
            <h1>{product.title}</h1>
            <p>Price - ₹{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
        </div>
    )
}