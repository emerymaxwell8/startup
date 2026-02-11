import React from 'react';

export function Login() {
  return (
    <main class="row-main">
        <div><img class="picture" alt = "pizza" width = 300px src="pizza-holder.jpg" /></div>
        <div>
            <h1 id='title-main' class="title">Welcome!</h1>
            <form method="get" action="post.html">
                <div class="input-group mb-3">
                    <span class="input-group-text">EMAIL</span>
                    <input class="form-control" type="text" placeholder="name@email.com" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">PASSWORD</span>
                    <input class="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" class ="btn btn-dark">LOGIN</button>
                <button type="submit" class ="btn btn-dark">REGISTER</button>
            </form>
        </div>
    </main>
  );
}