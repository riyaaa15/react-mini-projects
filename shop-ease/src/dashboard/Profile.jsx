import { useOutletContext } from "react-router-dom"

export default function Profile() {
    const user = useOutletContext()

    return(
        <div className="profile-card">
            <h1>Profile</h1>
            <p>{user.name}</p>
            <p>Email- {user.email}</p>
            <p>Age - {user.age}</p>
        </div>
    )
}