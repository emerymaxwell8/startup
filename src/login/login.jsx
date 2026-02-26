import React from 'react';

export function Login({userName, authState, onAuthChange}) {
    
    async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }
  return (
    <main className="row-main">
        <div><img className="picture" alt = "pizza" src="pizza-holder.jpg" width = {300}px /></div>
        <div>
            <h1 id='title-main' className="title">Welcome!</h1>
            <form method="get" action="post">
                <div className="mb-3 input-group">
                    <span className="input-group-text">EMAIL</span>
                    <input className="form-control" type="text" placeholder="name@email.com" />
                </div>
                <div className="mb-3 input-group">
                    <span className="input-group-text">PASSWORD</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button onClick={() => loginUser()} type="submit" className ="me-2 btn btn-dark">LOGIN</button>
                <button onCLick={() => registerUser()} type="submit" className ="btn btn-dark">REGISTER</button>
            </form>
        </div>
    </main>
  );
}