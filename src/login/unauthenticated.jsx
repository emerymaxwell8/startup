import React from 'react';
import { MessageDialog } from './messageDialog';
import { useNavigate } from 'react-router-dom'; 


export function Unauthenticated(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        const storedUser = localStorage.getItem('userName');
        const storedPassword = localStorage.getItem('password');

        if (storedUser === userName && storedPassword === password) {
            navigate('/post');
            props.onLogin(userName);
        } else {
            setDisplayError("Invalid username or password");
            return;
        }
    }

    async function registerUser() {

        if (localStorage.getItem('userName')) {
            setDisplayError("User already exists");
            return;
        }
        localStorage.setItem('userName', userName);
        localStorage.setItem('password', password);
        navigate('/post');
        props.onLogin(userName);
    }


    return (
        <>
        <div className="mb-3 input-group">
            <span className="input-group-text">EMAIL</span>
            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="name@email.com" />
        </div>
        <div className="mb-3 input-group">
            <span className="input-group-text">PASSWORD</span>
            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>
        <button  type="submit" className ="me-2 btn btn-dark" onClick={() => loginUser()} disabled={!userName || !password}>LOGIN</button>
        <button  type="submit" className ="btn btn-dark" onClick={() => registerUser()} disabled={!userName || !password}>REGISTER</button>

        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    )
}