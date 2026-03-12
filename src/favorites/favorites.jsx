import React from 'react';
import './favorites.css';

export function Favorites() {
  return (
    <main className="favorites-main">
        <h1 className="title"> YOUR FAVORITES!</h1>
        <div>
            <table className="table table-primary table-striped-columns">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DINNER PLAN</th>
                    </tr>
                </thead>
                <tbody>
                    {storedFavorites.map(row => (
                    <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.plan}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  );
}