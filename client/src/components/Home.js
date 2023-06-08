import './Home.css';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Profile = ({ userData }) => {
    return (
        <div className="profile-text">
            <div className="name text-center">{`Name : ${userData.name}`}</div>
            <div className="email text-center">{`Email : ${userData.email}`}</div>
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const callProfile = useCallback(async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserData(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }, [navigate]);
    useEffect(() => {
        callProfile();
    }, [callProfile]);
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <Link className="btn btn-primary home-btn" aria-current="page" to="/">Home</Link>
                    <div className="right-buttons">
                        <Link className="btn btn-info login-btn" aria-current="page" style={{ marginTop: "0px" }} to="/login">Login</Link>
                        <Link className="btn btn-info signup-btn" aria-current="page" to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
            {userData.name ? <Profile userData={userData} /> : null}
        </>
    )
}

export default Home;