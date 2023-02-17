import React from 'react'
import { Card } from './Card'

export const ListCard = ({personajes}) => {

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                personajes.map( personaje => <Card key={personaje.id} personaje={personaje} /> )
            }
        </div>
    )
}
