import React from 'react'

export default function grids({recipe}) {
    return (
        <div className="row">
            <div className="col-md-3">
            <p>{recipe["recipe"]["label"]}</p>
            </div>
        </div>
    );
}
