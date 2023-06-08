import './Login.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const images = {};
        for (let i = 1; i <= 36; i++) {
            images[`img${i}`] = require(`./img/${i}.png`);
        }
        var image = [images.img1, images.img2, images.img3, images.img4, images.img5, images.img6, images.img7, images.img8, images.img9, images.img10, images.img11, images.img12, images.img13, images.img14, images.img15, images.img16, images.img17, images.img18, images.img19, images.img20, images.img21, images.img22, images.img23, images.img24, images.img25, images.img26, images.img27, images.img28, images.img29, images.img30, images.img31, images.img32, images.img33, images.img34, images.img35, images.img36];
        var gridItems = document.querySelectorAll('.img-box');
        gridItems.forEach(function (item) {
            var randomImage = image[Math.floor(Math.random() * image.length)];
            item.style.backgroundImage = 'url(' + randomImage + ')';
            document.querySelectorAll('.img-box').forEach(function (element) {
                element.classList.remove('img-box');
            });
        });
    }, []);
    let [user, setUser] = useState({
        email: "", password: ""
    });
    const handleInputs = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handlePassword = (a) => {
        a.concat(",");
        setUser({ ...user, password: [...user.password, a] });
    }
    const ClearData = () => {
        setUser({ email: "", password: "" });
    }
    const LoginUser = async (e) => {
        let a = user.password.toString();
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: a
            })
        });
        const data = res;
        if (data.status === 400 || !data) {
            window.alert("Invalid Details.");
            console.log("Invalid Details.");
        } else {
            window.alert("Login Successfull.");
            console.log("Login Successfull.");
            navigate('/');
        }
    }
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
            <div className="container">
                <form className="loginform" method="POST">
                    <h1 className="logintitle">Login</h1>
                    <input className="input" type="email" placeholder="Email" value={user.email} onChange={handleInputs} autoComplete="off" required name="email" />
                    <div className="row box-row">
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("One")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Two")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Three")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Four")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Five")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Six")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Seven")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Eight")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Nine")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Ten")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Eleven")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twelve")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Fourteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Fifteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Sixteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Seventeen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Eighteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Nineteen")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-One")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Two")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Three")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Four")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Five")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Six")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Seven")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Eight")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Twenty-Nine")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-One")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-Two")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-Three")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-Four")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-Five")}></div>
                        <div className="col-md-5 pass-box text-center img-box" onClick={() => handlePassword("Thirty-Six")}></div>
                    </div>
                    <div className="login-button">
                        <button className="btn btn-primary button" type="submit" onClick={LoginUser}>Login</button>
                        <button className="btn btn-secondary button" type="button" onClick={ClearData}>Clear</button>
                    </div>
                    <Link className="link" to="/login">Forgot password?</Link>
                    <Link className="link" to="/signup">Don't have an account? SignUp</Link>
                </form>
            </div>
        </>
    )
}
export default Login;