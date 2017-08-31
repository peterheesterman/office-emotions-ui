import React from 'react'

import './CardMeta.css'

export const CardMeta = (props) => {
    return props.text ? (
         <div className="CardMeta">
            {props.text}
        </div>
    )
    :
    null
}
       