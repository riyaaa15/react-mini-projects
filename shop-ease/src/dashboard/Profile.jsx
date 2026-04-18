import { useOutletContext } from "react-router-dom"

export default function Profile() {
    const user = useOutletContext()

    return(
        <div>
            <h1>Profile</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    )
}