import React from 'react'

import { ScrollToTopOnMount } from '../../components/scroller/ScrollToTopOnMount'
import { AddEditView } from './AddEditView'

import './AddEdit.css'

let items = ['happy', 'sad', 'sober']

export const AddEdit = (props) => (
  <div className="AddEdit">
    <ScrollToTopOnMount startPoint={0}/>
    <AddEditView items={items} />
  </div>
)