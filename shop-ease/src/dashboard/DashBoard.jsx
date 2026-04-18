import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
    const user ={ name: "Riya", email: "riya@gmail.com", age: 21}
    return (
        <div>
            <h1>Welcome to Dashboard!</h1>
            <NavLink to='/dashboard/profile'>Profile</NavLink>
            <br />
            <NavLink to='/dashboard/orders'>Orders</NavLink>
            <Outlet context={user}/>
        </div>
    )
}