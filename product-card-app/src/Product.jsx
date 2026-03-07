import "./Product.css";
import Price from "./Price.jsx"

export default function Product({title, idx}) {
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable Buttons"],
        ["Intuitive Surface", "Designed for iPad Pro"],
        ["Designed for iPad Pro", "Intuitive Surface"],
        ["Wireless Mouse 2.4GHz", "Optical Orientation"]      
    ]
    return(
        <div className="product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}