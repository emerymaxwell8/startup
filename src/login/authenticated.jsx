import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
    fetch(`/api/auth/logout`, {
        method: 'delete',
    })
    .catch(() => {
      // Logout failed. Assuming offline
    })
    .finally(() => {
      localStorage.removeItem('userName');
      props.onLogout();
    });
}

    return (
        <div>
            <button  type="submit" className ="me-2 btn btn-dark" onClick={() => navigate('/post')}>POST</button>
            <button  type="submit" className ="btn btn-dark" onClick={() => logout()}>LOGOUT</button>
        </div>
    )
}