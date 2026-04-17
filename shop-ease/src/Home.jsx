import { products } from "./data"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return(
        <div>
            <h1>Home</h1>
            {products.map((product) => (
                <div 
                className="card"
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}>
                    <h2>{product.title}</h2>
                    <p>Price - ₹{product.price}</p>
                </div>
            ))}
        </div>
    )
}