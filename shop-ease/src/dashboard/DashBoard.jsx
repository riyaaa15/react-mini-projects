import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
    const user ={ name: "Riya", email: "riya@gmail.com", age: 21}
    return (
        <div className="dashboard">
            <h1>Welcome to Dashboard!</h1>
            <div className="dashboard-links">
                <NavLink to='/dashboard/profile'>Profile</NavLink>
                <NavLink to='/dashboard/orders'>Orders</NavLink>
            </div>
            <Outlet context={user}/>
        </div>
    )
}