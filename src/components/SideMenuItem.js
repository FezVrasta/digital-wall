import React, { Component } from 'react';
import {Actions} from '../actions/Actions';
import Thumb from './Thumb';

import CSSModules from 'react-css-modules';
import styles from '../styles/components/SideMenuItem.styl';

class SideMenuItem extends Component {
  render() {
    let styleName = 'item'
    if (this.isSelected()) styleName += ' item--selected'

    return <li styleName={styleName} onClick={this.changeSelection.bind(this)}>
      <Thumb image={this.image()} />
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.date}</p>
      </div>
    </li>
  }
  image() {
    return require(`../images/${this.props.item.images}/main.jpg`)
  }
  changeSelection() {
    Actions.changeSelection(this.props.item)
  }
  isSelected() {
    return this.props.item.key === this.props.selected.key
  }
}

export default CSSModules(SideMenuItem, styles, {allowMultiple: true})
