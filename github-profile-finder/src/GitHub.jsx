import { useState } from "react";

export default function GitHub() {
    let [ userName, setUserName] = useState("");
    let [ userData, setUserData] = useState("");
    let [ error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    
    let handleInputValue = (e) => {
        setUserName(e.target.value);
    }

    let handleSearchBtn = () => {
        fetchData();
        setUserName("");
    }

    let fetchData = async () => {
        setLoading(true);
        setError("");
        setUserData("");

        try {
            let URL = `https://api.github.com/users/${userName}`
             let response = await fetch(URL);
             let data = await response.json();

             if(data.message === "Not Found") {
                setError("User not Found!");
                setLoading(false);
                return;
             }
             setUserData(data);
             setLoading(false);
             
        } catch(error) {
            setError("something went wrong!");
            setLoading(false);
        }
        
    }
    
    return(
        <div className="container">
            <h1>GitHub Profile Finder</h1>

            <div className="search-section">
                <input 
            onChange={handleInputValue} 
            type="text" 
            placeholder="Enter user id"
            value={userName} />
            <button className="search-btn" onClick={handleSearchBtn}>
                Search
            </button>
            </div>
           
            {userData && (
                <div className="user-data">
                    <img  className="avatar" src={userData.avatar_url}/>
                    <p className="name">{userData.name || "No name available"}</p>
                    <p className="username">{userData.login}</p>
                    <p className="bio">{userData.bio || "No bio available"}</p>
                    <p className="public-repos">Public Repos: {userData.public_repos}</p>
                    <p className="followers"> Followers: {userData.followers}</p>
                    <a href={userData.html_url} target="_blank">View Profile</a>
                </div>
            )}

            {loading && <p>Searching....</p>}

            {error && <p>{error}</p>}
        </div>
    )
}