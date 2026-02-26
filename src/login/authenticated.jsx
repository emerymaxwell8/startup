import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <div>
              <div className='playerName'>{props.userName}</div>
              <button  type="submit" className ="me-2 btn btn-dark" onClick={() => navigate('/post')}>POST</button>
                <button  type="submit" className ="btn btn-dark" onClick={() => logout()}>LOGOUT</button>
        </div>
    )
}