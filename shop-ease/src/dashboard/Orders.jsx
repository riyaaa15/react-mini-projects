import { useOutletContext } from "react-router-dom"

export default function Orders() {
    const user  = useOutletContext();

    const orders = [
      { id: 1, product: "Nike Shoes", status: "Delivered" },
      { id: 2, product: "Boat Earphones", status: "Pending" },
      { id: 3, product: "Backpack", status: "Shipped" },
    ]

    return(
       <div className="order-card">
         <h1>{user.name}'s Orders</h1>
         {orders.map((order) => (
          <div key={order.status}>
            <p>
              {order.product} - {order.status}
            </p>
          </div>
         ))}
       </div>
    )
}