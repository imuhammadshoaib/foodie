import React from 'react'

export default function grids({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|png)$/) != null && (
            <div className="col-md-4">
                <img className="rounded img-fluid mx-auto d-block" src={recipe["recipe"]["image"]} />
                <h6 className="text-center pt-4">{recipe["recipe"]["label"]}</h6>
            </div>
        )
    );
}
