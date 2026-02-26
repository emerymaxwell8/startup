import React from 'react';


export function Unauthenticated(props) {

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function registerUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }


    return (
        <form method="get" action="post">
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
            </form>
    )
}