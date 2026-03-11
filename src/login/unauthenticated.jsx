import React from 'react';
import { MessageDialog } from './messageDialog';
import { useNavigate } from 'react-router-dom'; 


export function Unauthenticated(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function registerUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
      navigate('/post'); // Redirect to the home page after successful login or registration
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }


    return (
        <>
        <div className="mb-3 input-group">
            <span className="input-group-text">USERNAME</span>
            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username" />
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