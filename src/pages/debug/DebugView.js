import React from 'react'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const DebugView = (props) => (        
    <div className="DebugView">
        <Header />
        <div className="DebugView-content">
            <p>Some real time data will flow in here to help debug issues.</p>
        </div>
        <Footer />
    </div>
)
