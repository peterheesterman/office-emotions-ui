import React from 'react'

import { ScrollToTopOnMount } from '../../components/scroller/ScrollToTopOnMount'
import { DebugView } from './DebugView'

import './Debug.css'

// Put and feed data here

export const Debug = (props) => (        
    <div className="Debug" onClick={props.showMe}>
        <ScrollToTopOnMount />
        <DebugView />
    </div>
)
