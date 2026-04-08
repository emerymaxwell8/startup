import React from 'react';
import './favorites.css';


export function Favorites() {

const [favorites, setFavorites] = React.useState([]);

React.useEffect(() => {
    fetch('/api/favorites', {credentials: 'include'})
        .then((response) => response.json())
        .then((favorites) => {
        setFavorites(favorites);
        });
    }, []);

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
                    {favorites.map(row => (
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