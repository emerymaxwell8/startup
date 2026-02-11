import React from 'react';
import './favorites.css';

export function Favorites() {
  return (
    <main class="favorites-main">
        <h1 class="title"> YOUR FAVORITES!</h1>
        <div>
            <table class="table table-primary table-striped-columns">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DINNER PLAN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nico</td>
                        <td>making fish tacos!</td>
                    </tr>
                    <tr>
                        <td>Addie</td>
                        <td>I love a good rice bowl</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}