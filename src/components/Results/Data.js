import React from 'react'

export default function Data({resultado}) {

    const { name } = resultado;
    return (
        <div>
            {name}
        </div>
    )
}
