import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="row-main">
        <div><img className="picture" alt = "pizza" src="pizza-holder.jpg" width = {300}px /></div>
        <div>
            {authState !== AuthState.Unknown && <h1 id='title-main' className="title">Welcome!</h1>}
            {authState === AuthState.Authenticated && (
                      <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
                    )}
                    
            {authState === AuthState.Unauthenticated && (
                      <Unauthenticated
                        userName={userName}
                        onLogin={(loginUserName) => {
                          onAuthChange(loginUserName, AuthState.Authenticated);
                        }}
                      />
                    )}
        </div>
    </main>
  );
}