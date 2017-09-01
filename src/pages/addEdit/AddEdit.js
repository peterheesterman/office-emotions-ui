import React, { Component } from 'react';

import { ScrollToTopOnMount } from '../../components/scroller/ScrollToTopOnMount'
import { AddEditView } from './AddEditView'

import './AddEdit.css'


class AddEdit extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      commands: null
    };
  }
  componentDidMount() {
    fetch('http://192.168.88.54:3000/data').then(function (resp) {
      return resp.json();
    }).then(function (json) {
      console.log(json);
      this.setState({commands: json.emotions});
    }.bind(this))
  }
  
  render() {

    if (! this.state.commands) { return null; }

    return (
      <div className="AddEdit">
        <ScrollToTopOnMount startPoint={0}/>
        <AddEditView commands={this.state.commands} />
      </div>
    );
  }
}

export default AddEdit
