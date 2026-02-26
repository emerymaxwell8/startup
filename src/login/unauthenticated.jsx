import React from 'react';

export function Unauthenticated(props) {
    return (
        <form method="get" action="post">
                <div className="mb-3 input-group">
                    <span className="input-group-text">EMAIL</span>
                    <input className="form-control" type="text" placeholder="name@email.com" />
                </div>
                <div className="mb-3 input-group">
                    <span className="input-group-text">PASSWORD</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button  type="submit" className ="me-2 btn btn-dark">LOGIN</button>
                <button  type="submit" className ="btn btn-dark">REGISTER</button>
            </form>
    )
}