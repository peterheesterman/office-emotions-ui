import React from 'react'

import { ScrollToTopOnMount } from '../../components/scroller/ScrollToTopOnMount'
import { HomeView } from './HomeView'

import './Home.css'

import {items} from './pages'

export const Home = (props) => (
  <div className="Home">
    <ScrollToTopOnMount startPoint={0}/>
    <HomeView items={items} />
  </div>
)