
import React from 'react'
import { Link } from 'react-router-dom'

import { CardMeta } from '../card-meta/CardMeta'

import './Card.css'

export const Card = (props) => (        
    <div className="Card">
        <CardMeta text={props.meta} />
        <div className="Card-title">
            <Link to={props.to} className="Card-link">
                {props.title}
            </Link>
        </div>
        <div className="Card-description">
            {props.description}
        </div>
    </div>
)
