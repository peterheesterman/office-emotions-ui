import React from 'react'

import './cardContainer.css'

import { Card } from '../card/Card'

export const CardContainer = (props) => (
    <div className="CardContainer">
        {props.cards.map((item) => <Card key={item.code} {...item} />)}
    </div>
)
