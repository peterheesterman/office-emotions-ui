import React from 'react'

import { VerticalAlign } from '../../components/Layout/VerticalAlign/VerticalAlign'

import './Footer.css'

const textStyle = {
    'color': '#FFF',
}

export const Footer = (props) => (
  
    <footer className="Footer">
      <VerticalAlign>
        <div style={textStyle}>
          Office emotions
        </div>
      </VerticalAlign>
    </footer>
)
